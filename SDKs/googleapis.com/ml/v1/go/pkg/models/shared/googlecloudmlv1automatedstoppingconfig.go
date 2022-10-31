package shared

type GoogleCloudMlV1AutomatedStoppingConfig struct {
	DecayCurveStoppingConfig      *GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig `json:"decayCurveStoppingConfig,omitempty"`
	MedianAutomatedStoppingConfig *GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig     `json:"medianAutomatedStoppingConfig,omitempty"`
}
