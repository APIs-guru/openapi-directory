package shared

type EnterpriseCrmEventbusProtoConditionResult struct {
	CurrentTaskNumber *string `json:"currentTaskNumber"`
	NextTaskNumber    *string `json:"nextTaskNumber"`
	Result            *bool   `json:"result"`
}
