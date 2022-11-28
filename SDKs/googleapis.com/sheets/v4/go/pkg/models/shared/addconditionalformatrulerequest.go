package shared

// AddConditionalFormatRuleRequest
// Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
type AddConditionalFormatRuleRequest struct {
	Index *int32                 `json:"index,omitempty"`
	Rule  *ConditionalFormatRule `json:"rule,omitempty"`
}
