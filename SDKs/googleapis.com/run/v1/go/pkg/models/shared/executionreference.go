package shared

type ExecutionReference struct {
	CompletionTimestamp *string `json:"completionTimestamp"`
	CreationTimestamp   *string `json:"creationTimestamp"`
	Name                *string `json:"name"`
}
