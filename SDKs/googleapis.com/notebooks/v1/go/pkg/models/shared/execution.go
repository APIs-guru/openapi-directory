package shared

type ExecutionStateEnum string

const (
	ExecutionStateEnumStateUnspecified ExecutionStateEnum = "STATE_UNSPECIFIED"
	ExecutionStateEnumQueued           ExecutionStateEnum = "QUEUED"
	ExecutionStateEnumPreparing        ExecutionStateEnum = "PREPARING"
	ExecutionStateEnumRunning          ExecutionStateEnum = "RUNNING"
	ExecutionStateEnumSucceeded        ExecutionStateEnum = "SUCCEEDED"
	ExecutionStateEnumFailed           ExecutionStateEnum = "FAILED"
	ExecutionStateEnumCancelling       ExecutionStateEnum = "CANCELLING"
	ExecutionStateEnumCancelled        ExecutionStateEnum = "CANCELLED"
	ExecutionStateEnumExpired          ExecutionStateEnum = "EXPIRED"
	ExecutionStateEnumInitializing     ExecutionStateEnum = "INITIALIZING"
)

type Execution struct {
	CreateTime         *string             `json:"createTime,omitempty"`
	Description        *string             `json:"description,omitempty"`
	DisplayName        *string             `json:"displayName,omitempty"`
	ExecutionTemplate  *ExecutionTemplate  `json:"executionTemplate,omitempty"`
	JobURI             *string             `json:"jobUri,omitempty"`
	Name               *string             `json:"name,omitempty"`
	OutputNotebookFile *string             `json:"outputNotebookFile,omitempty"`
	State              *ExecutionStateEnum `json:"state,omitempty"`
	UpdateTime         *string             `json:"updateTime,omitempty"`
}
