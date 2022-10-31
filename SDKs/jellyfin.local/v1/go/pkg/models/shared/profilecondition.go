package shared



type ProfileCondition struct {
    Condition *ProfileConditionTypeEnum `json:"Condition,omitempty"`
    IsRequired *bool `json:"IsRequired,omitempty"`
    Property *ProfileConditionValueEnum `json:"Property,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

