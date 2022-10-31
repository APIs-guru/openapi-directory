package shared



type CheckInfo struct {
    ConsumerInfo *ConsumerInfo `json:"consumerInfo,omitempty"`
    UnusedArguments []string `json:"unusedArguments,omitempty"`
    
}

