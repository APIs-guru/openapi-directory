package shared

type UpdateConditionalFormatRuleRequest struct {
	Index    *int32                 `json:"index"`
	NewIndex *int32                 `json:"newIndex"`
	Rule     *ConditionalFormatRule `json:"rule"`
	SheetID  *int32                 `json:"sheetId"`
}
