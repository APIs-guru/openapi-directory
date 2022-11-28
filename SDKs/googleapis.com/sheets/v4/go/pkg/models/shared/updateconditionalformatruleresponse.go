package shared

// UpdateConditionalFormatRuleResponse
// The result of updating a conditional format rule.
type UpdateConditionalFormatRuleResponse struct {
	NewIndex *int32                 `json:"newIndex,omitempty"`
	NewRule  *ConditionalFormatRule `json:"newRule,omitempty"`
	OldIndex *int32                 `json:"oldIndex,omitempty"`
	OldRule  *ConditionalFormatRule `json:"oldRule,omitempty"`
}
