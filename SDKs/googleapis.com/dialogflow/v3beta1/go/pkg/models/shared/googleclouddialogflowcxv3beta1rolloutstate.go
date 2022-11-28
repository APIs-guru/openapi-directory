package shared

// GoogleCloudDialogflowCxV3beta1RolloutState
// State of the auto-rollout process.
type GoogleCloudDialogflowCxV3beta1RolloutState struct {
	StartTime *string `json:"startTime,omitempty"`
	Step      *string `json:"step,omitempty"`
	StepIndex *int32  `json:"stepIndex,omitempty"`
}
