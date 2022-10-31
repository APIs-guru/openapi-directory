package shared

type Group struct {
	CreateTime           *string               `json:"createTime,omitempty"`
	Description          *string               `json:"description,omitempty"`
	DisplayName          *string               `json:"displayName,omitempty"`
	DynamicGroupMetadata *DynamicGroupMetadata `json:"dynamicGroupMetadata,omitempty"`
	GroupKey             *EntityKey            `json:"groupKey,omitempty"`
	Labels               map[string]string     `json:"labels,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Parent               *string               `json:"parent,omitempty"`
	UpdateTime           *string               `json:"updateTime,omitempty"`
}
