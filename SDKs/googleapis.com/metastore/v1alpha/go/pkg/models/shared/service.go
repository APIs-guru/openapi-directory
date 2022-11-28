package shared

type ServiceDatabaseTypeEnum string

const (
	ServiceDatabaseTypeEnumDatabaseTypeUnspecified ServiceDatabaseTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	ServiceDatabaseTypeEnumMysql                   ServiceDatabaseTypeEnum = "MYSQL"
	ServiceDatabaseTypeEnumSpanner                 ServiceDatabaseTypeEnum = "SPANNER"
)

type ServiceReleaseChannelEnum string

const (
	ServiceReleaseChannelEnumReleaseChannelUnspecified ServiceReleaseChannelEnum = "RELEASE_CHANNEL_UNSPECIFIED"
	ServiceReleaseChannelEnumCanary                    ServiceReleaseChannelEnum = "CANARY"
	ServiceReleaseChannelEnumStable                    ServiceReleaseChannelEnum = "STABLE"
)

type ServiceStateEnum string

const (
	ServiceStateEnumStateUnspecified ServiceStateEnum = "STATE_UNSPECIFIED"
	ServiceStateEnumCreating         ServiceStateEnum = "CREATING"
	ServiceStateEnumActive           ServiceStateEnum = "ACTIVE"
	ServiceStateEnumSuspending       ServiceStateEnum = "SUSPENDING"
	ServiceStateEnumSuspended        ServiceStateEnum = "SUSPENDED"
	ServiceStateEnumUpdating         ServiceStateEnum = "UPDATING"
	ServiceStateEnumDeleting         ServiceStateEnum = "DELETING"
	ServiceStateEnumError            ServiceStateEnum = "ERROR"
)

type ServiceTierEnum string

const (
	ServiceTierEnumTierUnspecified ServiceTierEnum = "TIER_UNSPECIFIED"
	ServiceTierEnumDeveloper       ServiceTierEnum = "DEVELOPER"
	ServiceTierEnumEnterprise      ServiceTierEnum = "ENTERPRISE"
)

// ServiceInput
// A managed metastore service that serves metadata queries.
type ServiceInput struct {
	DatabaseType        *ServiceDatabaseTypeEnum   `json:"databaseType,omitempty"`
	EncryptionConfig    *EncryptionConfig          `json:"encryptionConfig,omitempty"`
	HiveMetastoreConfig *HiveMetastoreConfigInput  `json:"hiveMetastoreConfig,omitempty"`
	Labels              map[string]string          `json:"labels,omitempty"`
	MaintenanceWindow   *MaintenanceWindow         `json:"maintenanceWindow,omitempty"`
	MetadataIntegration *MetadataIntegration       `json:"metadataIntegration,omitempty"`
	Name                *string                    `json:"name,omitempty"`
	Network             *string                    `json:"network,omitempty"`
	NetworkConfig       *NetworkConfigInput        `json:"networkConfig,omitempty"`
	Port                *int32                     `json:"port,omitempty"`
	ReleaseChannel      *ServiceReleaseChannelEnum `json:"releaseChannel,omitempty"`
	TelemetryConfig     *TelemetryConfig           `json:"telemetryConfig,omitempty"`
	Tier                *ServiceTierEnum           `json:"tier,omitempty"`
}

// Service
// A managed metastore service that serves metadata queries.
type Service struct {
	ArtifactGcsURI             *string                     `json:"artifactGcsUri,omitempty"`
	CreateTime                 *string                     `json:"createTime,omitempty"`
	DatabaseType               *ServiceDatabaseTypeEnum    `json:"databaseType,omitempty"`
	EncryptionConfig           *EncryptionConfig           `json:"encryptionConfig,omitempty"`
	EndpointURI                *string                     `json:"endpointUri,omitempty"`
	HiveMetastoreConfig        *HiveMetastoreConfig        `json:"hiveMetastoreConfig,omitempty"`
	Labels                     map[string]string           `json:"labels,omitempty"`
	MaintenanceWindow          *MaintenanceWindow          `json:"maintenanceWindow,omitempty"`
	MetadataIntegration        *MetadataIntegration        `json:"metadataIntegration,omitempty"`
	MetadataManagementActivity *MetadataManagementActivity `json:"metadataManagementActivity,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
	Network                    *string                     `json:"network,omitempty"`
	NetworkConfig              *NetworkConfig              `json:"networkConfig,omitempty"`
	Port                       *int32                      `json:"port,omitempty"`
	ReleaseChannel             *ServiceReleaseChannelEnum  `json:"releaseChannel,omitempty"`
	State                      *ServiceStateEnum           `json:"state,omitempty"`
	StateMessage               *string                     `json:"stateMessage,omitempty"`
	TelemetryConfig            *TelemetryConfig            `json:"telemetryConfig,omitempty"`
	Tier                       *ServiceTierEnum            `json:"tier,omitempty"`
	UID                        *string                     `json:"uid,omitempty"`
	UpdateTime                 *string                     `json:"updateTime,omitempty"`
}
