package shared

type Group struct {
	CreateTime           *string               `json:"createTime"`
	Description          *string               `json:"description"`
	DisplayName          *string               `json:"displayName"`
	DynamicGroupMetadata *DynamicGroupMetadata `json:"dynamicGroupMetadata"`
	GroupKey             *EntityKey            `json:"groupKey"`
	Labels               map[string]string     `json:"labels"`
	Name                 *string               `json:"name"`
	Parent               *string               `json:"parent"`
	PosixGroups          []PosixGroup          `json:"posixGroups"`
	UpdateTime           *string               `json:"updateTime"`
}
