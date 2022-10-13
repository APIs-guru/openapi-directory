package shared

type InstanceStateEnum string

const (
	InstanceStateEnumStateNotKnown InstanceStateEnum = "STATE_NOT_KNOWN"
	InstanceStateEnumReady         InstanceStateEnum = "READY"
	InstanceStateEnumCreating      InstanceStateEnum = "CREATING"
)

type InstanceTypeEnum string

const (
	InstanceTypeEnumTypeUnspecified InstanceTypeEnum = "TYPE_UNSPECIFIED"
	InstanceTypeEnumProduction      InstanceTypeEnum = "PRODUCTION"
	InstanceTypeEnumDevelopment     InstanceTypeEnum = "DEVELOPMENT"
)

type Instance struct {
	CreateTime   *string            `json:"createTime"`
	DisplayName  *string            `json:"displayName"`
	Labels       map[string]string  `json:"labels"`
	Name         *string            `json:"name"`
	SatisfiesPzs *bool              `json:"satisfiesPzs"`
	State        *InstanceStateEnum `json:"state"`
	Type         *InstanceTypeEnum  `json:"type"`
}
