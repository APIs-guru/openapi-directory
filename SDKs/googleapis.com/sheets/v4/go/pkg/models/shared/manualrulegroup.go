package shared

type ManualRuleGroup struct {
	GroupName *ExtendedValue  `json:"groupName"`
	Items     []ExtendedValue `json:"items"`
}
