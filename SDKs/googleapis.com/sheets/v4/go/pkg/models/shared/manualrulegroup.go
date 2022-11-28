package shared

// ManualRuleGroup
// A group name and a list of items from the source data that should be placed in the group with this name.
type ManualRuleGroup struct {
	GroupName *ExtendedValue  `json:"groupName,omitempty"`
	Items     []ExtendedValue `json:"items,omitempty"`
}
