package shared

// CheckInfo
// Contains additional information about the check operation.
type CheckInfo struct {
	ConsumerInfo    *ConsumerInfo `json:"consumerInfo,omitempty"`
	UnusedArguments []string      `json:"unusedArguments,omitempty"`
}
