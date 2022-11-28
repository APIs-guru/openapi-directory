package shared

// GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep
// A single rollout step with specified traffic allocation.
type GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep struct {
	DisplayName    *string `json:"displayName,omitempty"`
	MinDuration    *string `json:"minDuration,omitempty"`
	TrafficPercent *int32  `json:"trafficPercent,omitempty"`
}
