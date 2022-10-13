package shared

type GoogleCloudDialogflowCxV3beta1RolloutConfig struct {
	FailureCondition *string                                                  `json:"failureCondition"`
	RolloutCondition *string                                                  `json:"rolloutCondition"`
	RolloutSteps     []GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep `json:"rolloutSteps"`
}
