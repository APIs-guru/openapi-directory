package shared

type CheckInfo struct {
	ConsumerInfo    *ConsumerInfo `json:"consumerInfo"`
	UnusedArguments []string      `json:"unusedArguments"`
}
