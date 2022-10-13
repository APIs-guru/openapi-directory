package shared

type LineItemAssignedTargetingOption struct {
	AssignedTargetingOption *AssignedTargetingOption `json:"assignedTargetingOption"`
	LineItemID              *string                  `json:"lineItemId"`
}
