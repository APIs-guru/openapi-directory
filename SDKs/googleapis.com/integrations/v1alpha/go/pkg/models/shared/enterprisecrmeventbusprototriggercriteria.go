package shared

type EnterpriseCrmEventbusProtoTriggerCriteria struct {
	Condition                                  *string                                    `json:"condition"`
	Parameters                                 *EnterpriseCrmEventbusProtoEventParameters `json:"parameters"`
	TriggerCriteriaTaskImplementationClassName *string                                    `json:"triggerCriteriaTaskImplementationClassName"`
}
