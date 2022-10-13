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
	CreateTime         *string             `json:"createTime"`
	Description        *string             `json:"description"`
	DisplayName        *string             `json:"displayName"`
	ExecutionTemplate  *ExecutionTemplate  `json:"executionTemplate"`
	JobURI             *string             `json:"jobUri"`
	Name               *string             `json:"name"`
	OutputNotebookFile *string             `json:"outputNotebookFile"`
	State              *ExecutionStateEnum `json:"state"`
	UpdateTime         *string             `json:"updateTime"`
}
