package shared

type EnterpriseCrmEventbusProtoNextTask struct {
	CombinedConditions []EnterpriseCrmEventbusProtoCombinedCondition `json:"combinedConditions"`
	Condition          *string                                       `json:"condition"`
	Description        *string                                       `json:"description"`
	Label              *string                                       `json:"label"`
	TaskConfigID       *string                                       `json:"taskConfigId"`
	TaskNumber         *string                                       `json:"taskNumber"`
}
