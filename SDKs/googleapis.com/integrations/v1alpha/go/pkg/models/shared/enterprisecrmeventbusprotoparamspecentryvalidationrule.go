package shared

type EnterpriseCrmEventbusProtoParamSpecEntryValidationRule struct {
	DoubleRange *EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange `json:"doubleRange"`
	IntRange    *EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange    `json:"intRange"`
	StringRegex *EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex `json:"stringRegex"`
}
