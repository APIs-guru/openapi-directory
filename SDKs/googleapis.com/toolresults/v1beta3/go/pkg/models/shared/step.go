package shared




type StepStateEnum string

const (
    StepStateEnumUnknownState StepStateEnum = "unknownState"
StepStateEnumPending StepStateEnum = "pending"
StepStateEnumInProgress StepStateEnum = "inProgress"
StepStateEnumComplete StepStateEnum = "complete"
)


type Step struct {
    CompletionTime *Timestamp `json:"completionTime,omitempty"`
    CreationTime *Timestamp `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DeviceUsageDuration *Duration `json:"deviceUsageDuration,omitempty"`
    DimensionValue []StepDimensionValueEntry `json:"dimensionValue,omitempty"`
    HasImages *bool `json:"hasImages,omitempty"`
    Labels []StepLabelsEntry `json:"labels,omitempty"`
    MultiStep *MultiStep `json:"multiStep,omitempty"`
    Name *string `json:"name,omitempty"`
    Outcome *Outcome `json:"outcome,omitempty"`
    RunDuration *Duration `json:"runDuration,omitempty"`
    State *StepStateEnum `json:"state,omitempty"`
    StepID *string `json:"stepId,omitempty"`
    TestExecutionStep *TestExecutionStep `json:"testExecutionStep,omitempty"`
    ToolExecutionStep *ToolExecutionStep `json:"toolExecutionStep,omitempty"`
    
}

