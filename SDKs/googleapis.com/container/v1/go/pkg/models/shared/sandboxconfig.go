package shared




type SandboxConfigTypeEnum string

const (
    SandboxConfigTypeEnumUnspecified SandboxConfigTypeEnum = "UNSPECIFIED"
SandboxConfigTypeEnumGvisor SandboxConfigTypeEnum = "GVISOR"
)


type SandboxConfig struct {
    Type *SandboxConfigTypeEnum `json:"type,omitempty"`
    
}

