package shared

// GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval
// A confidence interval is a range of possible values for the experiment objective you are trying to measure.
type GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval struct {
	ConfidenceLevel *float64 `json:"confidenceLevel,omitempty"`
	LowerBound      *float64 `json:"lowerBound,omitempty"`
	Ratio           *float64 `json:"ratio,omitempty"`
	UpperBound      *float64 `json:"upperBound,omitempty"`
}
