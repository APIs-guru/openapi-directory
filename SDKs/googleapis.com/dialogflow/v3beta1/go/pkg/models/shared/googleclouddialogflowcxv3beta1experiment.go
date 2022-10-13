package shared

type GoogleCloudDialogflowCxV3beta1ExperimentStateEnum string

const (
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumDraft            GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "DRAFT"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumRunning          GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumDone             GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "DONE"
	GoogleCloudDialogflowCxV3beta1ExperimentStateEnumRolloutFailed    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = "ROLLOUT_FAILED"
)

type GoogleCloudDialogflowCxV3beta1Experiment struct {
	CreateTime           *string                                             `json:"createTime"`
	Definition           *GoogleCloudDialogflowCxV3beta1ExperimentDefinition `json:"definition"`
	Description          *string                                             `json:"description"`
	DisplayName          *string                                             `json:"displayName"`
	EndTime              *string                                             `json:"endTime"`
	ExperimentLength     *string                                             `json:"experimentLength"`
	LastUpdateTime       *string                                             `json:"lastUpdateTime"`
	Name                 *string                                             `json:"name"`
	Result               *GoogleCloudDialogflowCxV3beta1ExperimentResult     `json:"result"`
	RolloutConfig        *GoogleCloudDialogflowCxV3beta1RolloutConfig        `json:"rolloutConfig"`
	RolloutFailureReason *string                                             `json:"rolloutFailureReason"`
	RolloutState         *GoogleCloudDialogflowCxV3beta1RolloutState         `json:"rolloutState"`
	StartTime            *string                                             `json:"startTime"`
	State                *GoogleCloudDialogflowCxV3beta1ExperimentStateEnum  `json:"state"`
	VariantsHistory      []GoogleCloudDialogflowCxV3beta1VariantsHistory     `json:"variantsHistory"`
}
