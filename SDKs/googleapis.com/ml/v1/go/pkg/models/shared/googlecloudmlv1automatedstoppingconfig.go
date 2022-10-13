package shared

type GoogleCloudMlV1AutomatedStoppingConfig struct {
	DecayCurveStoppingConfig      *GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig `json:"decayCurveStoppingConfig"`
	MedianAutomatedStoppingConfig *GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig     `json:"medianAutomatedStoppingConfig"`
}
