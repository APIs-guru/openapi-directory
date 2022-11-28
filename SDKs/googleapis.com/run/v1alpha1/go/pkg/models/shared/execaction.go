package shared

// ExecAction
// Not supported by Cloud Run ExecAction describes a "run in container" action.
type ExecAction struct {
	Command []string `json:"command,omitempty"`
}
