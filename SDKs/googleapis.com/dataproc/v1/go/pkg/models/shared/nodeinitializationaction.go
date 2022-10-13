package shared

type NodeInitializationAction struct {
	ExecutableFile   *string `json:"executableFile"`
	ExecutionTimeout *string `json:"executionTimeout"`
}
