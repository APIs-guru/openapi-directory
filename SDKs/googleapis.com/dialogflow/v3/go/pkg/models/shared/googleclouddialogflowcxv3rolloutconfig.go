package shared

// GoogleCloudDialogflowCxV3RolloutConfig
// The configuration for auto rollout.
type GoogleCloudDialogflowCxV3RolloutConfig struct {
	FailureCondition *string                                             `json:"failureCondition,omitempty"`
	RolloutCondition *string                                             `json:"rolloutCondition,omitempty"`
	RolloutSteps     []GoogleCloudDialogflowCxV3RolloutConfigRolloutStep `json:"rolloutSteps,omitempty"`
}
