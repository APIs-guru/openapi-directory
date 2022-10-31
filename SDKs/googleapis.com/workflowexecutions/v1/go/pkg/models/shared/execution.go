package shared




type ExecutionCallLogLevelEnum string

const (
    ExecutionCallLogLevelEnumCallLogLevelUnspecified ExecutionCallLogLevelEnum = "CALL_LOG_LEVEL_UNSPECIFIED"
ExecutionCallLogLevelEnumLogAllCalls ExecutionCallLogLevelEnum = "LOG_ALL_CALLS"
ExecutionCallLogLevelEnumLogErrorsOnly ExecutionCallLogLevelEnum = "LOG_ERRORS_ONLY"
)



type ExecutionStateEnum string

const (
    ExecutionStateEnumStateUnspecified ExecutionStateEnum = "STATE_UNSPECIFIED"
ExecutionStateEnumActive ExecutionStateEnum = "ACTIVE"
ExecutionStateEnumSucceeded ExecutionStateEnum = "SUCCEEDED"
ExecutionStateEnumFailed ExecutionStateEnum = "FAILED"
ExecutionStateEnumCancelled ExecutionStateEnum = "CANCELLED"
)


type Execution struct {
    Argument *string `json:"argument,omitempty"`
    CallLogLevel *ExecutionCallLogLevelEnum `json:"callLogLevel,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *Error `json:"error,omitempty"`
    Name *string `json:"name,omitempty"`
    Result *string `json:"result,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *ExecutionStateEnum `json:"state,omitempty"`
    Status *Status `json:"status,omitempty"`
    WorkflowRevisionID *string `json:"workflowRevisionId,omitempty"`
    
}

