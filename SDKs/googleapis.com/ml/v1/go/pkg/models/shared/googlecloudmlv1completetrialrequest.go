package shared

type GoogleCloudMlV1CompleteTrialRequest struct {
	FinalMeasurement *GoogleCloudMlV1Measurement `json:"finalMeasurement"`
	InfeasibleReason *string                     `json:"infeasibleReason"`
	TrialInfeasible  *bool                       `json:"trialInfeasible"`
}
