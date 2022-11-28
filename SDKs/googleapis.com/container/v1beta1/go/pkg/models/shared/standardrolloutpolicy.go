package shared

// StandardRolloutPolicy
// Standard rollout policy is the default policy for blue-green.
type StandardRolloutPolicy struct {
	BatchNodeCount    *int32   `json:"batchNodeCount,omitempty"`
	BatchPercentage   *float32 `json:"batchPercentage,omitempty"`
	BatchSoakDuration *string  `json:"batchSoakDuration,omitempty"`
}
