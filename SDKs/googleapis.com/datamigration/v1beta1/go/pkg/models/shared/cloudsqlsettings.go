package shared

type CloudSQLSettingsActivationPolicyEnum string

const (
	CloudSQLSettingsActivationPolicyEnumSQLActivationPolicyUnspecified CloudSQLSettingsActivationPolicyEnum = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
	CloudSQLSettingsActivationPolicyEnumAlways                         CloudSQLSettingsActivationPolicyEnum = "ALWAYS"
	CloudSQLSettingsActivationPolicyEnumNever                          CloudSQLSettingsActivationPolicyEnum = "NEVER"
)

type CloudSQLSettingsDataDiskTypeEnum string

const (
	CloudSQLSettingsDataDiskTypeEnumSQLDataDiskTypeUnspecified CloudSQLSettingsDataDiskTypeEnum = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
	CloudSQLSettingsDataDiskTypeEnumPdSsd                      CloudSQLSettingsDataDiskTypeEnum = "PD_SSD"
	CloudSQLSettingsDataDiskTypeEnumPdHdd                      CloudSQLSettingsDataDiskTypeEnum = "PD_HDD"
)

type CloudSQLSettingsDatabaseVersionEnum string

const (
	CloudSQLSettingsDatabaseVersionEnumSQLDatabaseVersionUnspecified CloudSQLSettingsDatabaseVersionEnum = "SQL_DATABASE_VERSION_UNSPECIFIED"
	CloudSQLSettingsDatabaseVersionEnumMysql56                       CloudSQLSettingsDatabaseVersionEnum = "MYSQL_5_6"
	CloudSQLSettingsDatabaseVersionEnumMysql57                       CloudSQLSettingsDatabaseVersionEnum = "MYSQL_5_7"
	CloudSQLSettingsDatabaseVersionEnumMysql80                       CloudSQLSettingsDatabaseVersionEnum = "MYSQL_8_0"
)

// CloudSQLSettingsInput
// Settings for creating a Cloud SQL database instance.
type CloudSQLSettingsInput struct {
	ActivationPolicy       *CloudSQLSettingsActivationPolicyEnum `json:"activationPolicy,omitempty"`
	AutoStorageIncrease    *bool                                 `json:"autoStorageIncrease,omitempty"`
	DataDiskSizeGb         *string                               `json:"dataDiskSizeGb,omitempty"`
	DataDiskType           *CloudSQLSettingsDataDiskTypeEnum     `json:"dataDiskType,omitempty"`
	DatabaseFlags          map[string]string                     `json:"databaseFlags,omitempty"`
	DatabaseVersion        *CloudSQLSettingsDatabaseVersionEnum  `json:"databaseVersion,omitempty"`
	IPConfig               *SQLIPConfig                          `json:"ipConfig,omitempty"`
	RootPassword           *string                               `json:"rootPassword,omitempty"`
	SourceID               *string                               `json:"sourceId,omitempty"`
	StorageAutoResizeLimit *string                               `json:"storageAutoResizeLimit,omitempty"`
	Tier                   *string                               `json:"tier,omitempty"`
	UserLabels             map[string]string                     `json:"userLabels,omitempty"`
	Zone                   *string                               `json:"zone,omitempty"`
}

// CloudSQLSettings
// Settings for creating a Cloud SQL database instance.
type CloudSQLSettings struct {
	ActivationPolicy       *CloudSQLSettingsActivationPolicyEnum `json:"activationPolicy,omitempty"`
	AutoStorageIncrease    *bool                                 `json:"autoStorageIncrease,omitempty"`
	DataDiskSizeGb         *string                               `json:"dataDiskSizeGb,omitempty"`
	DataDiskType           *CloudSQLSettingsDataDiskTypeEnum     `json:"dataDiskType,omitempty"`
	DatabaseFlags          map[string]string                     `json:"databaseFlags,omitempty"`
	DatabaseVersion        *CloudSQLSettingsDatabaseVersionEnum  `json:"databaseVersion,omitempty"`
	IPConfig               *SQLIPConfig                          `json:"ipConfig,omitempty"`
	RootPassword           *string                               `json:"rootPassword,omitempty"`
	RootPasswordSet        *bool                                 `json:"rootPasswordSet,omitempty"`
	SourceID               *string                               `json:"sourceId,omitempty"`
	StorageAutoResizeLimit *string                               `json:"storageAutoResizeLimit,omitempty"`
	Tier                   *string                               `json:"tier,omitempty"`
	UserLabels             map[string]string                     `json:"userLabels,omitempty"`
	Zone                   *string                               `json:"zone,omitempty"`
}
