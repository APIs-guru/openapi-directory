package shared

// GroupInput
// A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
type GroupInput struct {
	Description          *string               `json:"description,omitempty"`
	DisplayName          *string               `json:"displayName,omitempty"`
	DynamicGroupMetadata *DynamicGroupMetadata `json:"dynamicGroupMetadata,omitempty"`
	GroupKey             *EntityKey            `json:"groupKey,omitempty"`
	Labels               map[string]string     `json:"labels,omitempty"`
	Parent               *string               `json:"parent,omitempty"`
}

// Group
// A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
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
