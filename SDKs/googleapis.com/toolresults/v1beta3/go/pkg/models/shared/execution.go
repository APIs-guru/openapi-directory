package shared

type ExecutionStateEnum string

const (
	ExecutionStateEnumUnknownState ExecutionStateEnum = "unknownState"
	ExecutionStateEnumPending      ExecutionStateEnum = "pending"
	ExecutionStateEnumInProgress   ExecutionStateEnum = "inProgress"
	ExecutionStateEnumComplete     ExecutionStateEnum = "complete"
)

// Execution
// An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
type Execution struct {
	CompletionTime        *Timestamp               `json:"completionTime,omitempty"`
	CreationTime          *Timestamp               `json:"creationTime,omitempty"`
	DimensionDefinitions  []map[string]interface{} `json:"dimensionDefinitions,omitempty"`
	ExecutionID           *string                  `json:"executionId,omitempty"`
	Outcome               *Outcome                 `json:"outcome,omitempty"`
	Specification         *Specification           `json:"specification,omitempty"`
	State                 *ExecutionStateEnum      `json:"state,omitempty"`
	TestExecutionMatrixID *string                  `json:"testExecutionMatrixId,omitempty"`
}
