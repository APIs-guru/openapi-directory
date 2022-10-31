package shared




type DebuggeeCanaryModeEnum string

const (
    DebuggeeCanaryModeEnumCanaryModeUnspecified DebuggeeCanaryModeEnum = "CANARY_MODE_UNSPECIFIED"
DebuggeeCanaryModeEnumCanaryModeAlwaysEnabled DebuggeeCanaryModeEnum = "CANARY_MODE_ALWAYS_ENABLED"
DebuggeeCanaryModeEnumCanaryModeAlwaysDisabled DebuggeeCanaryModeEnum = "CANARY_MODE_ALWAYS_DISABLED"
DebuggeeCanaryModeEnumCanaryModeDefaultEnabled DebuggeeCanaryModeEnum = "CANARY_MODE_DEFAULT_ENABLED"
DebuggeeCanaryModeEnumCanaryModeDefaultDisabled DebuggeeCanaryModeEnum = "CANARY_MODE_DEFAULT_DISABLED"
)


type Debuggee struct {
    AgentVersion *string `json:"agentVersion,omitempty"`
    CanaryMode *DebuggeeCanaryModeEnum `json:"canaryMode,omitempty"`
    Description *string `json:"description,omitempty"`
    ExtSourceContexts []ExtendedSourceContext `json:"extSourceContexts,omitempty"`
    ID *string `json:"id,omitempty"`
    IsDisabled *bool `json:"isDisabled,omitempty"`
    IsInactive *bool `json:"isInactive,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Project *string `json:"project,omitempty"`
    SourceContexts []SourceContext `json:"sourceContexts,omitempty"`
    Status *StatusMessage `json:"status,omitempty"`
    Uniquifier *string `json:"uniquifier,omitempty"`
    
}

