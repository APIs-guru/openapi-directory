package shared

type NodeInitializationAction struct {
	ExecutableFile   *string `json:"executableFile,omitempty"`
	ExecutionTimeout *string `json:"executionTimeout,omitempty"`
}
