package shared

// GoogleCloudDialogflowCxV3RolloutConfigRolloutStep
// A single rollout step with specified traffic allocation.
type GoogleCloudDialogflowCxV3RolloutConfigRolloutStep struct {
	DisplayName    *string `json:"displayName,omitempty"`
	MinDuration    *string `json:"minDuration,omitempty"`
	TrafficPercent *int32  `json:"trafficPercent,omitempty"`
}
