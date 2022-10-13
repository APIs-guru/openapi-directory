package shared

type ExecutionStateEnum string

const (
	ExecutionStateEnumUnknownState ExecutionStateEnum = "unknownState"
	ExecutionStateEnumPending      ExecutionStateEnum = "pending"
	ExecutionStateEnumInProgress   ExecutionStateEnum = "inProgress"
	ExecutionStateEnumComplete     ExecutionStateEnum = "complete"
)

type Execution struct {
	CompletionTime        *Timestamp               `json:"completionTime"`
	CreationTime          *Timestamp               `json:"creationTime"`
	DimensionDefinitions  []map[string]interface{} `json:"dimensionDefinitions"`
	ExecutionID           *string                  `json:"executionId"`
	Outcome               *Outcome                 `json:"outcome"`
	Specification         *Specification           `json:"specification"`
	State                 *ExecutionStateEnum      `json:"state"`
	TestExecutionMatrixID *string                  `json:"testExecutionMatrixId"`
}
