package shared

type UpdateConditionalFormatRuleResponse struct {
	NewIndex *int32                 `json:"newIndex"`
	NewRule  *ConditionalFormatRule `json:"newRule"`
	OldIndex *int32                 `json:"oldIndex"`
	OldRule  *ConditionalFormatRule `json:"oldRule"`
}
