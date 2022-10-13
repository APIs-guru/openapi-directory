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
	BaseConfig               *string                                     `json:"baseConfig"`
	ConfigType               *InstanceConfigConfigTypeEnum               `json:"configType"`
	DisplayName              *string                                     `json:"displayName"`
	Etag                     *string                                     `json:"etag"`
	FreeInstanceAvailability *InstanceConfigFreeInstanceAvailabilityEnum `json:"freeInstanceAvailability"`
	Labels                   map[string]string                           `json:"labels"`
	LeaderOptions            []string                                    `json:"leaderOptions"`
	Name                     *string                                     `json:"name"`
	OptionalReplicas         []ReplicaInfo                               `json:"optionalReplicas"`
	Reconciling              *bool                                       `json:"reconciling"`
	Replicas                 []ReplicaInfo                               `json:"replicas"`
	State                    *InstanceConfigStateEnum                    `json:"state"`
}
