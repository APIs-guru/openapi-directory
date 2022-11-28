package shared

type GoogleCloudDialogflowCxV3beta1ExperimentStateEnum string

const (
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumDraft            GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "DRAFT"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumRunning          GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumDone             GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "DONE"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumRolloutFailed    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "ROLLOUT_FAILED"
)

// GoogleCloudDialogflowCxV3beta1Experiment
// Represents an experiment in an environment.
type GoogleCloudDialogflowCxV3beta1Experiment struct {
	CreateTime           *string                                             `json:"createTime,omitempty"`
	Definition           *GoogleCloudDialogflowCxV3beta1ExperimentDefinition `json:"definition,omitempty"`
	Description          *string                                             `json:"description,omitempty"`
	DisplayName          *string                                             `json:"displayName,omitempty"`
	EndTime              *string                                             `json:"endTime,omitempty"`
	ExperimentLength     *string                                             `json:"experimentLength,omitempty"`
	LastUpdateTime       *string                                             `json:"lastUpdateTime,omitempty"`
	Name                 *string                                             `json:"name,omitempty"`
	Result               *GoogleCloudDialogflowCxV3beta1ExperimentResult     `json:"result,omitempty"`
	RolloutConfig        *GoogleCloudDialogflowCxV3beta1RolloutConfig        `json:"rolloutConfig,omitempty"`
	RolloutFailureReason *string                                             `json:"rolloutFailureReason,omitempty"`
	RolloutState         *GoogleCloudDialogflowCxV3beta1RolloutState         `json:"rolloutState,omitempty"`
	StartTime            *string                                             `json:"startTime,omitempty"`
	State                *GoogleCloudDialogflowCxV3beta1ExperimentStateEnum  `json:"state,omitempty"`
	VariantsHistory      []GoogleCloudDialogflowCxV3beta1VariantsHistory     `json:"variantsHistory,omitempty"`
}
