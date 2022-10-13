package shared

type AddConditionalFormatRuleRequest struct {
	Index *int32                 `json:"index"`
	Rule  *ConditionalFormatRule `json:"rule"`
}
