package shared

type ExecutionCallLogLevelEnum string

const (
	ExecutionCallLogLevelEnumCallLogLevelUnspecified ExecutionCallLogLevelEnum = "CALL_LOG_LEVEL_UNSPECIFIED"
	ExecutionCallLogLevelEnumLogAllCalls             ExecutionCallLogLevelEnum = "LOG_ALL_CALLS"
	ExecutionCallLogLevelEnumLogErrorsOnly           ExecutionCallLogLevelEnum = "LOG_ERRORS_ONLY"
)

type ExecutionStateEnum string

const (
	ExecutionStateEnumStateUnspecified ExecutionStateEnum = "STATE_UNSPECIFIED"
	ExecutionStateEnumActive           ExecutionStateEnum = "ACTIVE"
	ExecutionStateEnumSucceeded        ExecutionStateEnum = "SUCCEEDED"
	ExecutionStateEnumFailed           ExecutionStateEnum = "FAILED"
	ExecutionStateEnumCancelled        ExecutionStateEnum = "CANCELLED"
)

type Execution struct {
	Argument           *string                    `json:"argument"`
	CallLogLevel       *ExecutionCallLogLevelEnum `json:"callLogLevel"`
	EndTime            *string                    `json:"endTime"`
	Error              *Error                     `json:"error"`
	Name               *string                    `json:"name"`
	Result             *string                    `json:"result"`
	StartTime          *string                    `json:"startTime"`
	State              *ExecutionStateEnum        `json:"state"`
	Status             *Status                    `json:"status"`
	WorkflowRevisionID *string                    `json:"workflowRevisionId"`
}
