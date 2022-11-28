package shared

// EnterpriseCrmEventbusProtoConditionResult
// Contains the combined condition calculation results.
type EnterpriseCrmEventbusProtoConditionResult struct {
	CurrentTaskNumber *string `json:"currentTaskNumber,omitempty"`
	NextTaskNumber    *string `json:"nextTaskNumber,omitempty"`
	Result            *bool   `json:"result,omitempty"`
}
