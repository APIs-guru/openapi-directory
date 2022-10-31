package shared

type ExecutionReference struct {
	CompletionTimestamp *string `json:"completionTimestamp,omitempty"`
	CreationTimestamp   *string `json:"creationTimestamp,omitempty"`
	Name                *string `json:"name,omitempty"`
}
