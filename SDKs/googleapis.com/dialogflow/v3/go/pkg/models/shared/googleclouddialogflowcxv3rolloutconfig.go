package shared

type GoogleCloudDialogflowCxV3RolloutConfig struct {
	FailureCondition *string                                             `json:"failureCondition"`
	RolloutCondition *string                                             `json:"rolloutCondition"`
	RolloutSteps     []GoogleCloudDialogflowCxV3RolloutConfigRolloutStep `json:"rolloutSteps"`
}
