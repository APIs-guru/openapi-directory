package shared



type EnterpriseCrmEventbusProtoTriggerCriteria struct {
    Condition *string `json:"condition,omitempty"`
    Parameters *EnterpriseCrmEventbusProtoEventParameters `json:"parameters,omitempty"`
    TriggerCriteriaTaskImplementationClassName *string `json:"triggerCriteriaTaskImplementationClassName,omitempty"`
    
}

