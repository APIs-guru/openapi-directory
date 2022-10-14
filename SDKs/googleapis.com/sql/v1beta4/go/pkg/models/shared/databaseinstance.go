package shared

type DatabaseInstanceBackendTypeEnum string

const (
	DatabaseInstanceBackendTypeEnumSQLBackendTypeUnspecified DatabaseInstanceBackendTypeEnum = "SQL_BACKEND_TYPE_UNSPECIFIED"
	DatabaseInstanceBackendTypeEnumFirstGen                  DatabaseInstanceBackendTypeEnum = "FIRST_GEN"
	DatabaseInstanceBackendTypeEnumSecondGen                 DatabaseInstanceBackendTypeEnum = "SECOND_GEN"
	DatabaseInstanceBackendTypeEnumExternal                  DatabaseInstanceBackendTypeEnum = "EXTERNAL"
)

type DatabaseInstanceDatabaseVersionEnum string

const (
	DatabaseInstanceDatabaseVersionEnumSQLDatabaseVersionUnspecified DatabaseInstanceDatabaseVersionEnum = "SQL_DATABASE_VERSION_UNSPECIFIED"
	DatabaseInstanceDatabaseVersionEnumMysql51                       DatabaseInstanceDatabaseVersionEnum = "MYSQL_5_1"
	DatabaseInstanceDatabaseVersionEnumMysql55                       DatabaseInstanceDatabaseVersionEnum = "MYSQL_5_5"
	DatabaseInstanceDatabaseVersionEnumMysql56                       DatabaseInstanceDatabaseVersionEnum = "MYSQL_5_6"
	DatabaseInstanceDatabaseVersionEnumMysql57                       DatabaseInstanceDatabaseVersionEnum = "MYSQL_5_7"
	DatabaseInstanceDatabaseVersionEnumSqlserver2017Standard         DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2017_STANDARD"
	DatabaseInstanceDatabaseVersionEnumSqlserver2017Enterprise       DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2017_ENTERPRISE"
	DatabaseInstanceDatabaseVersionEnumSqlserver2017Express          DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2017_EXPRESS"
	DatabaseInstanceDatabaseVersionEnumSqlserver2017Web              DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2017_WEB"
	DatabaseInstanceDatabaseVersionEnumPostgres96                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_9_6"
	DatabaseInstanceDatabaseVersionEnumPostgres10                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_10"
	DatabaseInstanceDatabaseVersionEnumPostgres11                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_11"
	DatabaseInstanceDatabaseVersionEnumPostgres12                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_12"
	DatabaseInstanceDatabaseVersionEnumPostgres13                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_13"
	DatabaseInstanceDatabaseVersionEnumPostgres14                    DatabaseInstanceDatabaseVersionEnum = "POSTGRES_14"
	DatabaseInstanceDatabaseVersionEnumMysql80                       DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0"
	DatabaseInstanceDatabaseVersionEnumMysql8018                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_18"
	DatabaseInstanceDatabaseVersionEnumMysql8026                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_26"
	DatabaseInstanceDatabaseVersionEnumMysql8027                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_27"
	DatabaseInstanceDatabaseVersionEnumMysql8028                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_28"
	DatabaseInstanceDatabaseVersionEnumMysql8029                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_29"
	DatabaseInstanceDatabaseVersionEnumMysql8030                     DatabaseInstanceDatabaseVersionEnum = "MYSQL_8_0_30"
	DatabaseInstanceDatabaseVersionEnumSqlserver2019Standard         DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2019_STANDARD"
	DatabaseInstanceDatabaseVersionEnumSqlserver2019Enterprise       DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2019_ENTERPRISE"
	DatabaseInstanceDatabaseVersionEnumSqlserver2019Express          DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2019_EXPRESS"
	DatabaseInstanceDatabaseVersionEnumSqlserver2019Web              DatabaseInstanceDatabaseVersionEnum = "SQLSERVER_2019_WEB"
)

type DatabaseInstanceFailoverReplica struct {
	Available *bool   `json:"available,omitempty"`
	Name      *string `json:"name,omitempty"`
}

type DatabaseInstanceInstanceTypeEnum string

const (
	DatabaseInstanceInstanceTypeEnumSQLInstanceTypeUnspecified DatabaseInstanceInstanceTypeEnum = "SQL_INSTANCE_TYPE_UNSPECIFIED"
	DatabaseInstanceInstanceTypeEnumCloudSQLInstance           DatabaseInstanceInstanceTypeEnum = "CLOUD_SQL_INSTANCE"
	DatabaseInstanceInstanceTypeEnumOnPremisesInstance         DatabaseInstanceInstanceTypeEnum = "ON_PREMISES_INSTANCE"
	DatabaseInstanceInstanceTypeEnumReadReplicaInstance        DatabaseInstanceInstanceTypeEnum = "READ_REPLICA_INSTANCE"
)

type DatabaseInstanceStateEnum string

const (
	DatabaseInstanceStateEnumSQLInstanceStateUnspecified DatabaseInstanceStateEnum = "SQL_INSTANCE_STATE_UNSPECIFIED"
	DatabaseInstanceStateEnumRunnable                    DatabaseInstanceStateEnum = "RUNNABLE"
	DatabaseInstanceStateEnumSuspended                   DatabaseInstanceStateEnum = "SUSPENDED"
	DatabaseInstanceStateEnumPendingDelete               DatabaseInstanceStateEnum = "PENDING_DELETE"
	DatabaseInstanceStateEnumPendingCreate               DatabaseInstanceStateEnum = "PENDING_CREATE"
	DatabaseInstanceStateEnumMaintenance                 DatabaseInstanceStateEnum = "MAINTENANCE"
	DatabaseInstanceStateEnumFailed                      DatabaseInstanceStateEnum = "FAILED"
	DatabaseInstanceStateEnumOnlineMaintenance           DatabaseInstanceStateEnum = "ONLINE_MAINTENANCE"
)

type DatabaseInstanceSuspensionReasonEnum string

const (
	DatabaseInstanceSuspensionReasonEnumSQLSuspensionReasonUnspecified DatabaseInstanceSuspensionReasonEnum = "SQL_SUSPENSION_REASON_UNSPECIFIED"
	DatabaseInstanceSuspensionReasonEnumBillingIssue                   DatabaseInstanceSuspensionReasonEnum = "BILLING_ISSUE"
	DatabaseInstanceSuspensionReasonEnumLegalIssue                     DatabaseInstanceSuspensionReasonEnum = "LEGAL_ISSUE"
	DatabaseInstanceSuspensionReasonEnumOperationalIssue               DatabaseInstanceSuspensionReasonEnum = "OPERATIONAL_ISSUE"
	DatabaseInstanceSuspensionReasonEnumKmsKeyIssue                    DatabaseInstanceSuspensionReasonEnum = "KMS_KEY_ISSUE"
)

type DatabaseInstance struct {
	AvailableMaintenanceVersions []string                               `json:"availableMaintenanceVersions,omitempty"`
	BackendType                  *DatabaseInstanceBackendTypeEnum       `json:"backendType,omitempty"`
	ConnectionName               *string                                `json:"connectionName,omitempty"`
	CreateTime                   *string                                `json:"createTime,omitempty"`
	CurrentDiskSize              *string                                `json:"currentDiskSize,omitempty"`
	DatabaseInstalledVersion     *string                                `json:"databaseInstalledVersion,omitempty"`
	DatabaseVersion              *DatabaseInstanceDatabaseVersionEnum   `json:"databaseVersion,omitempty"`
	DiskEncryptionConfiguration  *DiskEncryptionConfiguration           `json:"diskEncryptionConfiguration,omitempty"`
	DiskEncryptionStatus         *DiskEncryptionStatus                  `json:"diskEncryptionStatus,omitempty"`
	Etag                         *string                                `json:"etag,omitempty"`
	FailoverReplica              *DatabaseInstanceFailoverReplica       `json:"failoverReplica,omitempty"`
	GceZone                      *string                                `json:"gceZone,omitempty"`
	InstanceType                 *DatabaseInstanceInstanceTypeEnum      `json:"instanceType,omitempty"`
	IPAddresses                  []IPMapping                            `json:"ipAddresses,omitempty"`
	Ipv6Address                  *string                                `json:"ipv6Address,omitempty"`
	Kind                         *string                                `json:"kind,omitempty"`
	MaintenanceVersion           *string                                `json:"maintenanceVersion,omitempty"`
	MasterInstanceName           *string                                `json:"masterInstanceName,omitempty"`
	MaxDiskSize                  *string                                `json:"maxDiskSize,omitempty"`
	Name                         *string                                `json:"name,omitempty"`
	OnPremisesConfiguration      *OnPremisesConfiguration               `json:"onPremisesConfiguration,omitempty"`
	OutOfDiskReport              *SQLOutOfDiskReport                    `json:"outOfDiskReport,omitempty"`
	Project                      *string                                `json:"project,omitempty"`
	Region                       *string                                `json:"region,omitempty"`
	ReplicaConfiguration         *ReplicaConfiguration                  `json:"replicaConfiguration,omitempty"`
	ReplicaNames                 []string                               `json:"replicaNames,omitempty"`
	RootPassword                 *string                                `json:"rootPassword,omitempty"`
	SatisfiesPzs                 *bool                                  `json:"satisfiesPzs,omitempty"`
	ScheduledMaintenance         *SQLScheduledMaintenance               `json:"scheduledMaintenance,omitempty"`
	SecondaryGceZone             *string                                `json:"secondaryGceZone,omitempty"`
	SelfLink                     *string                                `json:"selfLink,omitempty"`
	ServerCaCert                 *SslCert                               `json:"serverCaCert,omitempty"`
	ServiceAccountEmailAddress   *string                                `json:"serviceAccountEmailAddress,omitempty"`
	Settings                     *Settings                              `json:"settings,omitempty"`
	State                        *DatabaseInstanceStateEnum             `json:"state,omitempty"`
	SuspensionReason             []DatabaseInstanceSuspensionReasonEnum `json:"suspensionReason,omitempty"`
}
