package shared

type SettingsActivationPolicyEnum string

const (
	SettingsActivationPolicyEnumSQLActivationPolicyUnspecified SettingsActivationPolicyEnum = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
	SettingsActivationPolicyEnumAlways                         SettingsActivationPolicyEnum = "ALWAYS"
	SettingsActivationPolicyEnumNever                          SettingsActivationPolicyEnum = "NEVER"
	SettingsActivationPolicyEnumOnDemand                       SettingsActivationPolicyEnum = "ON_DEMAND"
)

type SettingsAvailabilityTypeEnum string

const (
	SettingsAvailabilityTypeEnumSQLAvailabilityTypeUnspecified SettingsAvailabilityTypeEnum = "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
	SettingsAvailabilityTypeEnumZonal                          SettingsAvailabilityTypeEnum = "ZONAL"
	SettingsAvailabilityTypeEnumRegional                       SettingsAvailabilityTypeEnum = "REGIONAL"
)

type SettingsConnectorEnforcementEnum string

const (
	SettingsConnectorEnforcementEnumConnectorEnforcementUnspecified SettingsConnectorEnforcementEnum = "CONNECTOR_ENFORCEMENT_UNSPECIFIED"
	SettingsConnectorEnforcementEnumNotRequired                     SettingsConnectorEnforcementEnum = "NOT_REQUIRED"
	SettingsConnectorEnforcementEnumRequired                        SettingsConnectorEnforcementEnum = "REQUIRED"
)

type SettingsDataDiskTypeEnum string

const (
	SettingsDataDiskTypeEnumSQLDataDiskTypeUnspecified SettingsDataDiskTypeEnum = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
	SettingsDataDiskTypeEnumPdSsd                      SettingsDataDiskTypeEnum = "PD_SSD"
	SettingsDataDiskTypeEnumPdHdd                      SettingsDataDiskTypeEnum = "PD_HDD"
	SettingsDataDiskTypeEnumObsoleteLocalSsd           SettingsDataDiskTypeEnum = "OBSOLETE_LOCAL_SSD"
)

type SettingsPricingPlanEnum string

const (
	SettingsPricingPlanEnumSQLPricingPlanUnspecified SettingsPricingPlanEnum = "SQL_PRICING_PLAN_UNSPECIFIED"
	SettingsPricingPlanEnumPackage                   SettingsPricingPlanEnum = "PACKAGE"
	SettingsPricingPlanEnumPerUse                    SettingsPricingPlanEnum = "PER_USE"
)

type SettingsReplicationTypeEnum string

const (
	SettingsReplicationTypeEnumSQLReplicationTypeUnspecified SettingsReplicationTypeEnum = "SQL_REPLICATION_TYPE_UNSPECIFIED"
	SettingsReplicationTypeEnumSynchronous                   SettingsReplicationTypeEnum = "SYNCHRONOUS"
	SettingsReplicationTypeEnumAsynchronous                  SettingsReplicationTypeEnum = "ASYNCHRONOUS"
)

type Settings struct {
	ActivationPolicy            *SettingsActivationPolicyEnum     `json:"activationPolicy"`
	ActiveDirectoryConfig       *SQLActiveDirectoryConfig         `json:"activeDirectoryConfig"`
	AuthorizedGaeApplications   []string                          `json:"authorizedGaeApplications"`
	AvailabilityType            *SettingsAvailabilityTypeEnum     `json:"availabilityType"`
	BackupConfiguration         *BackupConfiguration              `json:"backupConfiguration"`
	Collation                   *string                           `json:"collation"`
	ConnectorEnforcement        *SettingsConnectorEnforcementEnum `json:"connectorEnforcement"`
	CrashSafeReplicationEnabled *bool                             `json:"crashSafeReplicationEnabled"`
	DataDiskSizeGb              *string                           `json:"dataDiskSizeGb"`
	DataDiskType                *SettingsDataDiskTypeEnum         `json:"dataDiskType"`
	DatabaseFlags               []DatabaseFlags                   `json:"databaseFlags"`
	DatabaseReplicationEnabled  *bool                             `json:"databaseReplicationEnabled"`
	DeletionProtectionEnabled   *bool                             `json:"deletionProtectionEnabled"`
	DenyMaintenancePeriods      []DenyMaintenancePeriod           `json:"denyMaintenancePeriods"`
	InsightsConfig              *InsightsConfig                   `json:"insightsConfig"`
	IPConfiguration             *IPConfiguration                  `json:"ipConfiguration"`
	Kind                        *string                           `json:"kind"`
	LocationPreference          *LocationPreference               `json:"locationPreference"`
	MaintenanceWindow           *MaintenanceWindow                `json:"maintenanceWindow"`
	PasswordValidationPolicy    *PasswordValidationPolicy         `json:"passwordValidationPolicy"`
	PricingPlan                 *SettingsPricingPlanEnum          `json:"pricingPlan"`
	ReplicationType             *SettingsReplicationTypeEnum      `json:"replicationType"`
	SettingsVersion             *string                           `json:"settingsVersion"`
	SQLServerAuditConfig        *SQLServerAuditConfig             `json:"sqlServerAuditConfig"`
	StorageAutoResize           *bool                             `json:"storageAutoResize"`
	StorageAutoResizeLimit      *string                           `json:"storageAutoResizeLimit"`
	Tier                        *string                           `json:"tier"`
	TimeZone                    *string                           `json:"timeZone"`
	UserLabels                  map[string]string                 `json:"userLabels"`
}
