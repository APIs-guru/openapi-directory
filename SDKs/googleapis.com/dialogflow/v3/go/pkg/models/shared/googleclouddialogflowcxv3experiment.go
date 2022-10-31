package shared




type GoogleCloudDialogflowCxV3ExperimentStateEnum string

const (
    GoogleCloudDialogflowCxV3ExperimentStateEnumStateUnspecified GoogleCloudDialogflowCxV3ExperimentStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDialogflowCxV3ExperimentStateEnumDraft GoogleCloudDialogflowCxV3ExperimentStateEnum = "DRAFT"
GoogleCloudDialogflowCxV3ExperimentStateEnumRunning GoogleCloudDialogflowCxV3ExperimentStateEnum = "RUNNING"
GoogleCloudDialogflowCxV3ExperimentStateEnumDone GoogleCloudDialogflowCxV3ExperimentStateEnum = "DONE"
GoogleCloudDialogflowCxV3ExperimentStateEnumRolloutFailed GoogleCloudDialogflowCxV3ExperimentStateEnum = "ROLLOUT_FAILED"
)


type GoogleCloudDialogflowCxV3Experiment struct {
    CreateTime *string `json:"createTime,omitempty"`
    Definition *GoogleCloudDialogflowCxV3ExperimentDefinition `json:"definition,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    ExperimentLength *string `json:"experimentLength,omitempty"`
    LastUpdateTime *string `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Result *GoogleCloudDialogflowCxV3ExperimentResult `json:"result,omitempty"`
    RolloutConfig *GoogleCloudDialogflowCxV3RolloutConfig `json:"rolloutConfig,omitempty"`
    RolloutFailureReason *string `json:"rolloutFailureReason,omitempty"`
    RolloutState *GoogleCloudDialogflowCxV3RolloutState `json:"rolloutState,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *GoogleCloudDialogflowCxV3ExperimentStateEnum `json:"state,omitempty"`
    VariantsHistory []GoogleCloudDialogflowCxV3VariantsHistory `json:"variantsHistory,omitempty"`
    
}

