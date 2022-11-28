package shared

type StepStateEnum string

const (
	StepStateEnumUnknownState StepStateEnum = "unknownState"
	StepStateEnumPending      StepStateEnum = "pending"
	StepStateEnumInProgress   StepStateEnum = "inProgress"
	StepStateEnumComplete     StepStateEnum = "complete"
)

// Step
// A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
type Step struct {
	CompletionTime      *Timestamp                `json:"completionTime,omitempty"`
	CreationTime        *Timestamp                `json:"creationTime,omitempty"`
	Description         *string                   `json:"description,omitempty"`
	DeviceUsageDuration *Duration                 `json:"deviceUsageDuration,omitempty"`
	DimensionValue      []StepDimensionValueEntry `json:"dimensionValue,omitempty"`
	HasImages           *bool                     `json:"hasImages,omitempty"`
	Labels              []StepLabelsEntry         `json:"labels,omitempty"`
	MultiStep           *MultiStep                `json:"multiStep,omitempty"`
	Name                *string                   `json:"name,omitempty"`
	Outcome             *Outcome                  `json:"outcome,omitempty"`
	RunDuration         *Duration                 `json:"runDuration,omitempty"`
	State               *StepStateEnum            `json:"state,omitempty"`
	StepID              *string                   `json:"stepId,omitempty"`
	TestExecutionStep   *TestExecutionStep        `json:"testExecutionStep,omitempty"`
	ToolExecutionStep   *ToolExecutionStep        `json:"toolExecutionStep,omitempty"`
}
