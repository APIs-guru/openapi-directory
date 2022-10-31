package shared




type GoogleCloudMlV1TrialStateEnum string

const (
    GoogleCloudMlV1TrialStateEnumStateUnspecified GoogleCloudMlV1TrialStateEnum = "STATE_UNSPECIFIED"
GoogleCloudMlV1TrialStateEnumRequested GoogleCloudMlV1TrialStateEnum = "REQUESTED"
GoogleCloudMlV1TrialStateEnumActive GoogleCloudMlV1TrialStateEnum = "ACTIVE"
GoogleCloudMlV1TrialStateEnumCompleted GoogleCloudMlV1TrialStateEnum = "COMPLETED"
GoogleCloudMlV1TrialStateEnumStopping GoogleCloudMlV1TrialStateEnum = "STOPPING"
)


type GoogleCloudMlV1Trial struct {
    ClientID *string `json:"clientId,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    FinalMeasurement *GoogleCloudMlV1Measurement `json:"finalMeasurement,omitempty"`
    InfeasibleReason *string `json:"infeasibleReason,omitempty"`
    Measurements []GoogleCloudMlV1Measurement `json:"measurements,omitempty"`
    Name *string `json:"name,omitempty"`
    Parameters []GoogleCloudMlV1TrialParameter `json:"parameters,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *GoogleCloudMlV1TrialStateEnum `json:"state,omitempty"`
    TrialInfeasible *bool `json:"trialInfeasible,omitempty"`
    
}

