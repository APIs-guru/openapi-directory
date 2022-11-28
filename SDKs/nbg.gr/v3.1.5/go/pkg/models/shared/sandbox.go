package shared

// Sandbox
// Sandbox model
type Sandbox struct {
	SandboxID string        `json:"sandboxId"`
	Users     []SandboxUser `json:"users,omitempty"`
}
