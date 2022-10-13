package shared

type SandboxConfigTypeEnum string

const (
	SandboxConfigTypeEnumUnspecified SandboxConfigTypeEnum = "UNSPECIFIED"
	SandboxConfigTypeEnumGvisor      SandboxConfigTypeEnum = "GVISOR"
)

type SandboxConfig struct {
	SandboxType *string                `json:"sandboxType"`
	Type        *SandboxConfigTypeEnum `json:"type"`
}
