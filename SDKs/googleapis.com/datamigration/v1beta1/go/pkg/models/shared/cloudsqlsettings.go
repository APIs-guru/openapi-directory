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

type CloudSQLSettings struct {
	ActivationPolicy       *CloudSQLSettingsActivationPolicyEnum `json:"activationPolicy"`
	AutoStorageIncrease    *bool                                 `json:"autoStorageIncrease"`
	DataDiskSizeGb         *string                               `json:"dataDiskSizeGb"`
	DataDiskType           *CloudSQLSettingsDataDiskTypeEnum     `json:"dataDiskType"`
	DatabaseFlags          map[string]string                     `json:"databaseFlags"`
	DatabaseVersion        *CloudSQLSettingsDatabaseVersionEnum  `json:"databaseVersion"`
	IPConfig               *SQLIPConfig                          `json:"ipConfig"`
	RootPassword           *string                               `json:"rootPassword"`
	RootPasswordSet        *bool                                 `json:"rootPasswordSet"`
	SourceID               *string                               `json:"sourceId"`
	StorageAutoResizeLimit *string                               `json:"storageAutoResizeLimit"`
	Tier                   *string                               `json:"tier"`
	UserLabels             map[string]string                     `json:"userLabels"`
	Zone                   *string                               `json:"zone"`
}
