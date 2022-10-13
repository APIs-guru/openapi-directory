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

type Service struct {
	ArtifactGcsURI             *string                     `json:"artifactGcsUri"`
	CreateTime                 *string                     `json:"createTime"`
	DatabaseType               *ServiceDatabaseTypeEnum    `json:"databaseType"`
	EncryptionConfig           *EncryptionConfig           `json:"encryptionConfig"`
	EndpointURI                *string                     `json:"endpointUri"`
	HiveMetastoreConfig        *HiveMetastoreConfig        `json:"hiveMetastoreConfig"`
	Labels                     map[string]string           `json:"labels"`
	MaintenanceWindow          *MaintenanceWindow          `json:"maintenanceWindow"`
	MetadataIntegration        *MetadataIntegration        `json:"metadataIntegration"`
	MetadataManagementActivity *MetadataManagementActivity `json:"metadataManagementActivity"`
	Name                       *string                     `json:"name"`
	Network                    *string                     `json:"network"`
	NetworkConfig              *NetworkConfig              `json:"networkConfig"`
	Port                       *int32                      `json:"port"`
	ReleaseChannel             *ServiceReleaseChannelEnum  `json:"releaseChannel"`
	State                      *ServiceStateEnum           `json:"state"`
	StateMessage               *string                     `json:"stateMessage"`
	Tier                       *ServiceTierEnum            `json:"tier"`
	UID                        *string                     `json:"uid"`
	UpdateTime                 *string                     `json:"updateTime"`
}
