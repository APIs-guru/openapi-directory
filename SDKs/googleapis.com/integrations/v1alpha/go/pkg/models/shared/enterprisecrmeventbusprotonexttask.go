package shared

// EnterpriseCrmEventbusProtoNextTask
// The task that is next in line to be executed, if the condition specified evaluated to true.
type EnterpriseCrmEventbusProtoNextTask struct {
	CombinedConditions []EnterpriseCrmEventbusProtoCombinedCondition `json:"combinedConditions,omitempty"`
	Condition          *string                                       `json:"condition,omitempty"`
	Description        *string                                       `json:"description,omitempty"`
	Label              *string                                       `json:"label,omitempty"`
	TaskConfigID       *string                                       `json:"taskConfigId,omitempty"`
	TaskNumber         *string                                       `json:"taskNumber,omitempty"`
}
