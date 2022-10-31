package shared

type InstanceConfigConfigTypeEnum string

const (
	InstanceConfigConfigTypeEnumTypeUnspecified InstanceConfigConfigTypeEnum = "TYPE_UNSPECIFIED"
	InstanceConfigConfigTypeEnumGoogleManaged   InstanceConfigConfigTypeEnum = "GOOGLE_MANAGED"
	InstanceConfigConfigTypeEnumUserManaged     InstanceConfigConfigTypeEnum = "USER_MANAGED"
)

type InstanceConfigFreeInstanceAvailabilityEnum string

const (
	InstanceConfigFreeInstanceAvailabilityEnumFreeInstanceAvailabilityUnspecified InstanceConfigFreeInstanceAvailabilityEnum = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED"
	InstanceConfigFreeInstanceAvailabilityEnumAvailable                           InstanceConfigFreeInstanceAvailabilityEnum = "AVAILABLE"
	InstanceConfigFreeInstanceAvailabilityEnumUnsupported                         InstanceConfigFreeInstanceAvailabilityEnum = "UNSUPPORTED"
	InstanceConfigFreeInstanceAvailabilityEnumDisabled                            InstanceConfigFreeInstanceAvailabilityEnum = "DISABLED"
	InstanceConfigFreeInstanceAvailabilityEnumQuotaExceeded                       InstanceConfigFreeInstanceAvailabilityEnum = "QUOTA_EXCEEDED"
)

type InstanceConfigStateEnum string

const (
	InstanceConfigStateEnumStateUnspecified InstanceConfigStateEnum = "STATE_UNSPECIFIED"
	InstanceConfigStateEnumCreating         InstanceConfigStateEnum = "CREATING"
	InstanceConfigStateEnumReady            InstanceConfigStateEnum = "READY"
)

type InstanceConfig struct {
	BaseConfig               *string                                     `json:"baseConfig,omitempty"`
	ConfigType               *InstanceConfigConfigTypeEnum               `json:"configType,omitempty"`
	DisplayName              *string                                     `json:"displayName,omitempty"`
	Etag                     *string                                     `json:"etag,omitempty"`
	FreeInstanceAvailability *InstanceConfigFreeInstanceAvailabilityEnum `json:"freeInstanceAvailability,omitempty"`
	Labels                   map[string]string                           `json:"labels,omitempty"`
	LeaderOptions            []string                                    `json:"leaderOptions,omitempty"`
	Name                     *string                                     `json:"name,omitempty"`
	OptionalReplicas         []ReplicaInfo                               `json:"optionalReplicas,omitempty"`
	Reconciling              *bool                                       `json:"reconciling,omitempty"`
	Replicas                 []ReplicaInfo                               `json:"replicas,omitempty"`
	State                    *InstanceConfigStateEnum                    `json:"state,omitempty"`
}
