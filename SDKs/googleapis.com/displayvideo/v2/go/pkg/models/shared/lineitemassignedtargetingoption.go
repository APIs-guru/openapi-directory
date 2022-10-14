package shared

type LineItemAssignedTargetingOption struct {
	AssignedTargetingOption *AssignedTargetingOption `json:"assignedTargetingOption,omitempty"`
	LineItemID              *string                  `json:"lineItemId,omitempty"`
}
