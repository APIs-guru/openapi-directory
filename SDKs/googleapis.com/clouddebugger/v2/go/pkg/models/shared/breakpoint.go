package shared

type BreakpointActionEnum string

const (
	BreakpointActionEnumCapture BreakpointActionEnum = "CAPTURE"
	BreakpointActionEnumLog     BreakpointActionEnum = "LOG"
)

type BreakpointLogLevelEnum string

const (
	BreakpointLogLevelEnumInfo    BreakpointLogLevelEnum = "INFO"
	BreakpointLogLevelEnumWarning BreakpointLogLevelEnum = "WARNING"
	BreakpointLogLevelEnumError   BreakpointLogLevelEnum = "ERROR"
)

type BreakpointStateEnum string

const (
	BreakpointStateEnumStateUnspecified         BreakpointStateEnum = "STATE_UNSPECIFIED"
	BreakpointStateEnumStateCanaryPendingAgents BreakpointStateEnum = "STATE_CANARY_PENDING_AGENTS"
	BreakpointStateEnumStateCanaryActive        BreakpointStateEnum = "STATE_CANARY_ACTIVE"
	BreakpointStateEnumStateRollingToAll        BreakpointStateEnum = "STATE_ROLLING_TO_ALL"
	BreakpointStateEnumStateIsFinal             BreakpointStateEnum = "STATE_IS_FINAL"
)

// Breakpoint
// ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
type Breakpoint struct {
	Action               *BreakpointActionEnum   `json:"action,omitempty"`
	CanaryExpireTime     *string                 `json:"canaryExpireTime,omitempty"`
	Condition            *string                 `json:"condition,omitempty"`
	CreateTime           *string                 `json:"createTime,omitempty"`
	EvaluatedExpressions []Variable              `json:"evaluatedExpressions,omitempty"`
	Expressions          []string                `json:"expressions,omitempty"`
	FinalTime            *string                 `json:"finalTime,omitempty"`
	ID                   *string                 `json:"id,omitempty"`
	IsFinalState         *bool                   `json:"isFinalState,omitempty"`
	Labels               map[string]string       `json:"labels,omitempty"`
	Location             *SourceLocation         `json:"location,omitempty"`
	LogLevel             *BreakpointLogLevelEnum `json:"logLevel,omitempty"`
	LogMessageFormat     *string                 `json:"logMessageFormat,omitempty"`
	StackFrames          []StackFrame            `json:"stackFrames,omitempty"`
	State                *BreakpointStateEnum    `json:"state,omitempty"`
	Status               *StatusMessage          `json:"status,omitempty"`
	UserEmail            *string                 `json:"userEmail,omitempty"`
	VariableTable        []Variable              `json:"variableTable,omitempty"`
}
