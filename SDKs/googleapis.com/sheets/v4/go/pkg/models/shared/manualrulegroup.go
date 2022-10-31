package shared

type ManualRuleGroup struct {
	GroupName *ExtendedValue  `json:"groupName,omitempty"`
	Items     []ExtendedValue `json:"items,omitempty"`
}
