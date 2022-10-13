package shared

type GoogleCloudDialogflowCxV3ExperimentStateEnum string

const (
	GoogleCloudDialogflowCxV3ExperimentStateEnumStateUnspecified GoogleCloudDialogflowCxV3ExperimentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ExperimentStateEnumDraft            GoogleCloudDialogflowCxV3ExperimentStateEnum = "DRAFT"
	GoogleCloudDialogflowCxV3ExperimentStateEnumRunning          GoogleCloudDialogflowCxV3ExperimentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3ExperimentStateEnumDone             GoogleCloudDialogflowCxV3ExperimentStateEnum = "DONE"
	GoogleCloudDialogflowCxV3ExperimentStateEnumRolloutFailed    GoogleCloudDialogflowCxV3ExperimentStateEnum = "ROLLOUT_FAILED"
)

type GoogleCloudDialogflowCxV3Experiment struct {
	CreateTime           *string                                        `json:"createTime"`
	Definition           *GoogleCloudDialogflowCxV3ExperimentDefinition `json:"definition"`
	Description          *string                                        `json:"description"`
	DisplayName          *string                                        `json:"displayName"`
	EndTime              *string                                        `json:"endTime"`
	ExperimentLength     *string                                        `json:"experimentLength"`
	LastUpdateTime       *string                                        `json:"lastUpdateTime"`
	Name                 *string                                        `json:"name"`
	Result               *GoogleCloudDialogflowCxV3ExperimentResult     `json:"result"`
	RolloutConfig        *GoogleCloudDialogflowCxV3RolloutConfig        `json:"rolloutConfig"`
	RolloutFailureReason *string                                        `json:"rolloutFailureReason"`
	RolloutState         *GoogleCloudDialogflowCxV3RolloutState         `json:"rolloutState"`
	StartTime            *string                                        `json:"startTime"`
	State                *GoogleCloudDialogflowCxV3ExperimentStateEnum  `json:"state"`
	VariantsHistory      []GoogleCloudDialogflowCxV3VariantsHistory     `json:"variantsHistory"`
}
