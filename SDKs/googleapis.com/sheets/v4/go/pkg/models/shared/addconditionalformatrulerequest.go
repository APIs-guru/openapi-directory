package shared



type AddConditionalFormatRuleRequest struct {
    Index *int32 `json:"index,omitempty"`
    Rule *ConditionalFormatRule `json:"rule,omitempty"`
    
}

