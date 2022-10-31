package shared



type GoogleCloudMlV1CompleteTrialRequest struct {
    FinalMeasurement *GoogleCloudMlV1Measurement `json:"finalMeasurement,omitempty"`
    InfeasibleReason *string `json:"infeasibleReason,omitempty"`
    TrialInfeasible *bool `json:"trialInfeasible,omitempty"`
    
}

