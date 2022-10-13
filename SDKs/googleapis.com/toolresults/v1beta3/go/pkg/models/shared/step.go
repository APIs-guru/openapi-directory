package shared

type StepStateEnum string

const (
	StepStateEnumUnknownState StepStateEnum = "unknownState"
	StepStateEnumPending      StepStateEnum = "pending"
	StepStateEnumInProgress   StepStateEnum = "inProgress"
	StepStateEnumComplete     StepStateEnum = "complete"
)

type Step struct {
	CompletionTime      *Timestamp                `json:"completionTime"`
	CreationTime        *Timestamp                `json:"creationTime"`
	Description         *string                   `json:"description"`
	DeviceUsageDuration *Duration                 `json:"deviceUsageDuration"`
	DimensionValue      []StepDimensionValueEntry `json:"dimensionValue"`
	HasImages           *bool                     `json:"hasImages"`
	Labels              []StepLabelsEntry         `json:"labels"`
	MultiStep           *MultiStep                `json:"multiStep"`
	Name                *string                   `json:"name"`
	Outcome             *Outcome                  `json:"outcome"`
	RunDuration         *Duration                 `json:"runDuration"`
	State               *StepStateEnum            `json:"state"`
	StepID              *string                   `json:"stepId"`
	TestExecutionStep   *TestExecutionStep        `json:"testExecutionStep"`
	ToolExecutionStep   *ToolExecutionStep        `json:"toolExecutionStep"`
}
