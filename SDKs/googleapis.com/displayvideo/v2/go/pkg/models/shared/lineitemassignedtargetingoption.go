package shared

// LineItemAssignedTargetingOption
// Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
type LineItemAssignedTargetingOption struct {
	AssignedTargetingOption *AssignedTargetingOption `json:"assignedTargetingOption,omitempty"`
	LineItemID              *string                  `json:"lineItemId,omitempty"`
}
