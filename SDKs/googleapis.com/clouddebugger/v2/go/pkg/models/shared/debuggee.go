package shared

type DebuggeeCanaryModeEnum string

const (
	DebuggeeCanaryModeEnumCanaryModeUnspecified     DebuggeeCanaryModeEnum = "CANARY_MODE_UNSPECIFIED"
	DebuggeeCanaryModeEnumCanaryModeAlwaysEnabled   DebuggeeCanaryModeEnum = "CANARY_MODE_ALWAYS_ENABLED"
	DebuggeeCanaryModeEnumCanaryModeAlwaysDisabled  DebuggeeCanaryModeEnum = "CANARY_MODE_ALWAYS_DISABLED"
	DebuggeeCanaryModeEnumCanaryModeDefaultEnabled  DebuggeeCanaryModeEnum = "CANARY_MODE_DEFAULT_ENABLED"
	DebuggeeCanaryModeEnumCanaryModeDefaultDisabled DebuggeeCanaryModeEnum = "CANARY_MODE_DEFAULT_DISABLED"
)

type Debuggee struct {
	AgentVersion      *string                 `json:"agentVersion"`
	CanaryMode        *DebuggeeCanaryModeEnum `json:"canaryMode"`
	Description       *string                 `json:"description"`
	ExtSourceContexts []ExtendedSourceContext `json:"extSourceContexts"`
	ID                *string                 `json:"id"`
	IsDisabled        *bool                   `json:"isDisabled"`
	IsInactive        *bool                   `json:"isInactive"`
	Labels            map[string]string       `json:"labels"`
	Project           *string                 `json:"project"`
	SourceContexts    []SourceContext         `json:"sourceContexts"`
	Status            *StatusMessage          `json:"status"`
	Uniquifier        *string                 `json:"uniquifier"`
}
