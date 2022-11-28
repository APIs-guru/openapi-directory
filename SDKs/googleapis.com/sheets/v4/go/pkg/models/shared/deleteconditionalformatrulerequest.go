package shared

// DeleteConditionalFormatRuleRequest
// Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
type DeleteConditionalFormatRuleRequest struct {
	Index   *int32 `json:"index,omitempty"`
	SheetID *int32 `json:"sheetId,omitempty"`
}
