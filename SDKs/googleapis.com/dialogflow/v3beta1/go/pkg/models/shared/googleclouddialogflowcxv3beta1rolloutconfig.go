package shared

// GoogleCloudDialogflowCxV3beta1RolloutConfig
// The configuration for auto rollout.
type GoogleCloudDialogflowCxV3beta1RolloutConfig struct {
	FailureCondition *string                                                  `json:"failureCondition,omitempty"`
	RolloutCondition *string                                                  `json:"rolloutCondition,omitempty"`
	RolloutSteps     []GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep `json:"rolloutSteps,omitempty"`
}
