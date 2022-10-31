package shared




type ExecutionStateEnum string

const (
    ExecutionStateEnumUnknownState ExecutionStateEnum = "unknownState"
ExecutionStateEnumPending ExecutionStateEnum = "pending"
ExecutionStateEnumInProgress ExecutionStateEnum = "inProgress"
ExecutionStateEnumComplete ExecutionStateEnum = "complete"
)


type Execution struct {
    CompletionTime *Timestamp `json:"completionTime,omitempty"`
    CreationTime *Timestamp `json:"creationTime,omitempty"`
    DimensionDefinitions []map[string]interface{} `json:"dimensionDefinitions,omitempty"`
    ExecutionID *string `json:"executionId,omitempty"`
    Outcome *Outcome `json:"outcome,omitempty"`
    Specification *Specification `json:"specification,omitempty"`
    State *ExecutionStateEnum `json:"state,omitempty"`
    TestExecutionMatrixID *string `json:"testExecutionMatrixId,omitempty"`
    
}

