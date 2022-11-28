package shared

// GoogleCloudMlV1AutomatedStoppingConfig
// Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
type GoogleCloudMlV1AutomatedStoppingConfig struct {
	DecayCurveStoppingConfig      *GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig `json:"decayCurveStoppingConfig,omitempty"`
	MedianAutomatedStoppingConfig *GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig     `json:"medianAutomatedStoppingConfig,omitempty"`
}
