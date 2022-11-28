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

// Settings
// Database instance settings.
type Settings struct {
	ActivationPolicy            *SettingsActivationPolicyEnum     `json:"activationPolicy,omitempty"`
	ActiveDirectoryConfig       *SQLActiveDirectoryConfig         `json:"activeDirectoryConfig,omitempty"`
	AuthorizedGaeApplications   []string                          `json:"authorizedGaeApplications,omitempty"`
	AvailabilityType            *SettingsAvailabilityTypeEnum     `json:"availabilityType,omitempty"`
	BackupConfiguration         *BackupConfiguration              `json:"backupConfiguration,omitempty"`
	Collation                   *string                           `json:"collation,omitempty"`
	ConnectorEnforcement        *SettingsConnectorEnforcementEnum `json:"connectorEnforcement,omitempty"`
	CrashSafeReplicationEnabled *bool                             `json:"crashSafeReplicationEnabled,omitempty"`
	DataDiskSizeGb              *string                           `json:"dataDiskSizeGb,omitempty"`
	DataDiskType                *SettingsDataDiskTypeEnum         `json:"dataDiskType,omitempty"`
	DatabaseFlags               []DatabaseFlags                   `json:"databaseFlags,omitempty"`
	DatabaseReplicationEnabled  *bool                             `json:"databaseReplicationEnabled,omitempty"`
	DeletionProtectionEnabled   *bool                             `json:"deletionProtectionEnabled,omitempty"`
	DenyMaintenancePeriods      []DenyMaintenancePeriod           `json:"denyMaintenancePeriods,omitempty"`
	InsightsConfig              *InsightsConfig                   `json:"insightsConfig,omitempty"`
	IPConfiguration             *IPConfiguration                  `json:"ipConfiguration,omitempty"`
	Kind                        *string                           `json:"kind,omitempty"`
	LocationPreference          *LocationPreference               `json:"locationPreference,omitempty"`
	MaintenanceWindow           *MaintenanceWindow                `json:"maintenanceWindow,omitempty"`
	PasswordValidationPolicy    *PasswordValidationPolicy         `json:"passwordValidationPolicy,omitempty"`
	PricingPlan                 *SettingsPricingPlanEnum          `json:"pricingPlan,omitempty"`
	ReplicationType             *SettingsReplicationTypeEnum      `json:"replicationType,omitempty"`
	SettingsVersion             *string                           `json:"settingsVersion,omitempty"`
	SQLServerAuditConfig        *SQLServerAuditConfig             `json:"sqlServerAuditConfig,omitempty"`
	StorageAutoResize           *bool                             `json:"storageAutoResize,omitempty"`
	StorageAutoResizeLimit      *string                           `json:"storageAutoResizeLimit,omitempty"`
	Tier                        *string                           `json:"tier,omitempty"`
	TimeZone                    *string                           `json:"timeZone,omitempty"`
	UserLabels                  map[string]string                 `json:"userLabels,omitempty"`
}
