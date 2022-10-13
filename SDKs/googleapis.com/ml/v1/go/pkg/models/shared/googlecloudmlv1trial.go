package shared

type GoogleCloudMlV1TrialStateEnum string

const (
	GoogleCloudMlV1TrialStateEnumStateUnspecified GoogleCloudMlV1TrialStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudMlV1TrialStateEnumRequested        GoogleCloudMlV1TrialStateEnum = "REQUESTED"
	GoogleCloudMlV1TrialStateEnumActive           GoogleCloudMlV1TrialStateEnum = "ACTIVE"
	GoogleCloudMlV1TrialStateEnumCompleted        GoogleCloudMlV1TrialStateEnum = "COMPLETED"
	GoogleCloudMlV1TrialStateEnumStopping         GoogleCloudMlV1TrialStateEnum = "STOPPING"
)

type GoogleCloudMlV1Trial struct {
	ClientID         *string                         `json:"clientId"`
	EndTime          *string                         `json:"endTime"`
	FinalMeasurement *GoogleCloudMlV1Measurement     `json:"finalMeasurement"`
	InfeasibleReason *string                         `json:"infeasibleReason"`
	Measurements     []GoogleCloudMlV1Measurement    `json:"measurements"`
	Name             *string                         `json:"name"`
	Parameters       []GoogleCloudMlV1TrialParameter `json:"parameters"`
	StartTime        *string                         `json:"startTime"`
	State            *GoogleCloudMlV1TrialStateEnum  `json:"state"`
	TrialInfeasible  *bool                           `json:"trialInfeasible"`
}
