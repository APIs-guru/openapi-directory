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
	CreateTime   *string            `json:"createTime,omitempty"`
	DisplayName  *string            `json:"displayName,omitempty"`
	Labels       map[string]string  `json:"labels,omitempty"`
	Name         *string            `json:"name,omitempty"`
	SatisfiesPzs *bool              `json:"satisfiesPzs,omitempty"`
	State        *InstanceStateEnum `json:"state,omitempty"`
	Type         *InstanceTypeEnum  `json:"type,omitempty"`
}
