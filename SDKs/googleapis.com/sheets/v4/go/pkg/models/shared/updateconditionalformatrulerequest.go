package shared

// UpdateConditionalFormatRuleRequest
// Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
type UpdateConditionalFormatRuleRequest struct {
	Index    *int32                 `json:"index,omitempty"`
	NewIndex *int32                 `json:"newIndex,omitempty"`
	Rule     *ConditionalFormatRule `json:"rule,omitempty"`
	SheetID  *int32                 `json:"sheetId,omitempty"`
}
