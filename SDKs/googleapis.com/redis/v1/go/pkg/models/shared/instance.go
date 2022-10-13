package shared

type InstanceConnectModeEnum string

const (
	InstanceConnectModeEnumConnectModeUnspecified InstanceConnectModeEnum = "CONNECT_MODE_UNSPECIFIED"
	InstanceConnectModeEnumDirectPeering          InstanceConnectModeEnum = "DIRECT_PEERING"
	InstanceConnectModeEnumPrivateServiceAccess   InstanceConnectModeEnum = "PRIVATE_SERVICE_ACCESS"
)

type InstanceReadReplicasModeEnum string

const (
	InstanceReadReplicasModeEnumReadReplicasModeUnspecified InstanceReadReplicasModeEnum = "READ_REPLICAS_MODE_UNSPECIFIED"
	InstanceReadReplicasModeEnumReadReplicasDisabled        InstanceReadReplicasModeEnum = "READ_REPLICAS_DISABLED"
	InstanceReadReplicasModeEnumReadReplicasEnabled         InstanceReadReplicasModeEnum = "READ_REPLICAS_ENABLED"
)

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumCreating         InstanceStateEnum = "CREATING"
	InstanceStateEnumReady            InstanceStateEnum = "READY"
	InstanceStateEnumUpdating         InstanceStateEnum = "UPDATING"
	InstanceStateEnumDeleting         InstanceStateEnum = "DELETING"
	InstanceStateEnumRepairing        InstanceStateEnum = "REPAIRING"
	InstanceStateEnumMaintenance      InstanceStateEnum = "MAINTENANCE"
	InstanceStateEnumImporting        InstanceStateEnum = "IMPORTING"
	InstanceStateEnumFailingOver      InstanceStateEnum = "FAILING_OVER"
)

type InstanceSuspensionReasonsEnum string

const (
	InstanceSuspensionReasonsEnumSuspensionReasonUnspecified InstanceSuspensionReasonsEnum = "SUSPENSION_REASON_UNSPECIFIED"
	InstanceSuspensionReasonsEnumCustomerManagedKeyIssue     InstanceSuspensionReasonsEnum = "CUSTOMER_MANAGED_KEY_ISSUE"
)

type InstanceTierEnum string

const (
	InstanceTierEnumTierUnspecified InstanceTierEnum = "TIER_UNSPECIFIED"
	InstanceTierEnumBasic           InstanceTierEnum = "BASIC"
	InstanceTierEnumStandardHa      InstanceTierEnum = "STANDARD_HA"
)

type InstanceTransitEncryptionModeEnum string

const (
	InstanceTransitEncryptionModeEnumTransitEncryptionModeUnspecified InstanceTransitEncryptionModeEnum = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
	InstanceTransitEncryptionModeEnumServerAuthentication             InstanceTransitEncryptionModeEnum = "SERVER_AUTHENTICATION"
	InstanceTransitEncryptionModeEnumDisabled                         InstanceTransitEncryptionModeEnum = "DISABLED"
)

type Instance struct {
	AlternativeLocationID  *string                            `json:"alternativeLocationId"`
	AuthEnabled            *bool                              `json:"authEnabled"`
	AuthorizedNetwork      *string                            `json:"authorizedNetwork"`
	ConnectMode            *InstanceConnectModeEnum           `json:"connectMode"`
	CreateTime             *string                            `json:"createTime"`
	CurrentLocationID      *string                            `json:"currentLocationId"`
	CustomerManagedKey     *string                            `json:"customerManagedKey"`
	DisplayName            *string                            `json:"displayName"`
	Host                   *string                            `json:"host"`
	Labels                 map[string]string                  `json:"labels"`
	LocationID             *string                            `json:"locationId"`
	MaintenancePolicy      *MaintenancePolicy                 `json:"maintenancePolicy"`
	MaintenanceSchedule    *MaintenanceSchedule               `json:"maintenanceSchedule"`
	MemorySizeGb           *int32                             `json:"memorySizeGb"`
	Name                   *string                            `json:"name"`
	Nodes                  []NodeInfo                         `json:"nodes"`
	PersistenceConfig      *PersistenceConfig                 `json:"persistenceConfig"`
	PersistenceIamIdentity *string                            `json:"persistenceIamIdentity"`
	Port                   *int32                             `json:"port"`
	ReadEndpoint           *string                            `json:"readEndpoint"`
	ReadEndpointPort       *int32                             `json:"readEndpointPort"`
	ReadReplicasMode       *InstanceReadReplicasModeEnum      `json:"readReplicasMode"`
	RedisConfigs           map[string]string                  `json:"redisConfigs"`
	RedisVersion           *string                            `json:"redisVersion"`
	ReplicaCount           *int32                             `json:"replicaCount"`
	ReservedIPRange        *string                            `json:"reservedIpRange"`
	SecondaryIPRange       *string                            `json:"secondaryIpRange"`
	ServerCaCerts          []TLSCertificate                   `json:"serverCaCerts"`
	State                  *InstanceStateEnum                 `json:"state"`
	StatusMessage          *string                            `json:"statusMessage"`
	SuspensionReasons      []InstanceSuspensionReasonsEnum    `json:"suspensionReasons"`
	Tier                   *InstanceTierEnum                  `json:"tier"`
	TransitEncryptionMode  *InstanceTransitEncryptionModeEnum `json:"transitEncryptionMode"`
}
