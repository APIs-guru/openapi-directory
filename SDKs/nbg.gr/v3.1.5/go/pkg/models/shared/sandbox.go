package shared



type Sandbox struct {
    SandboxID string `json:"sandboxId"`
    Users []SandboxUser `json:"users,omitempty"`
    
}

