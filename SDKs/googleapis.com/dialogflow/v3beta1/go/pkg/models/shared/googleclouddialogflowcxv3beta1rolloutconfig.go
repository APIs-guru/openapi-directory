package shared



type GoogleCloudDialogflowCxV3beta1RolloutConfig struct {
    FailureCondition *string `json:"failureCondition,omitempty"`
    RolloutCondition *string `json:"rolloutCondition,omitempty"`
    RolloutSteps []GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep `json:"rolloutSteps,omitempty"`
    
}

