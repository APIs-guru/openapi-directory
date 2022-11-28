package shared

// NodeInitializationAction
// Specifies an executable to run on a fully configured node and a timeout period for executable completion.
type NodeInitializationAction struct {
	ExecutableFile   *string `json:"executableFile,omitempty"`
	ExecutionTimeout *string `json:"executionTimeout,omitempty"`
}
