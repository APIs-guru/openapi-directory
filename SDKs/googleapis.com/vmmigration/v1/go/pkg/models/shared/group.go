package shared

// Group
// Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
type Group struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}

// GroupInput
// Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
type GroupInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}
