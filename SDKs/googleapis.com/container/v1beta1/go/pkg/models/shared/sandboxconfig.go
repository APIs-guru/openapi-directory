package shared

type SandboxConfigTypeEnum string

const (
	SandboxConfigTypeEnumUnspecified SandboxConfigTypeEnum = "UNSPECIFIED"
	SandboxConfigTypeEnumGvisor      SandboxConfigTypeEnum = "GVISOR"
)

type SandboxConfig struct {
	SandboxType *string                `json:"sandboxType,omitempty"`
	Type        *SandboxConfigTypeEnum `json:"type,omitempty"`
}
