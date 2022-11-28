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

// Execution
// The definition of a single executed notebook.
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

// ExecutionInput
// The definition of a single executed notebook.
type ExecutionInput struct {
	Description        *string            `json:"description,omitempty"`
	ExecutionTemplate  *ExecutionTemplate `json:"executionTemplate,omitempty"`
	OutputNotebookFile *string            `json:"outputNotebookFile,omitempty"`
}
