package shared



type DataValidationRule struct {
    Condition *BooleanCondition `json:"condition,omitempty"`
    InputMessage *string `json:"inputMessage,omitempty"`
    ShowCustomUI *bool `json:"showCustomUi,omitempty"`
    Strict *bool `json:"strict,omitempty"`
    
}

