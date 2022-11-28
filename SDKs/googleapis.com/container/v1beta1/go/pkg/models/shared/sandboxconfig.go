package shared

type SandboxConfigTypeEnum string

const (
	SandboxConfigTypeEnumUnspecified SandboxConfigTypeEnum = "UNSPECIFIED"
	SandboxConfigTypeEnumGvisor      SandboxConfigTypeEnum = "GVISOR"
)

// SandboxConfig
// SandboxConfig contains configurations of the sandbox to use for the node.
type SandboxConfig struct {
	SandboxType *string                `json:"sandboxType,omitempty"`
	Type        *SandboxConfigTypeEnum `json:"type,omitempty"`
}
