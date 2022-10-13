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

type Breakpoint struct {
	Action               *BreakpointActionEnum   `json:"action"`
	CanaryExpireTime     *string                 `json:"canaryExpireTime"`
	Condition            *string                 `json:"condition"`
	CreateTime           *string                 `json:"createTime"`
	EvaluatedExpressions []Variable              `json:"evaluatedExpressions"`
	Expressions          []string                `json:"expressions"`
	FinalTime            *string                 `json:"finalTime"`
	ID                   *string                 `json:"id"`
	IsFinalState         *bool                   `json:"isFinalState"`
	Labels               map[string]string       `json:"labels"`
	Location             *SourceLocation         `json:"location"`
	LogLevel             *BreakpointLogLevelEnum `json:"logLevel"`
	LogMessageFormat     *string                 `json:"logMessageFormat"`
	StackFrames          []StackFrame            `json:"stackFrames"`
	State                *BreakpointStateEnum    `json:"state"`
	Status               *StatusMessage          `json:"status"`
	UserEmail            *string                 `json:"userEmail"`
	VariableTable        []Variable              `json:"variableTable"`
}
