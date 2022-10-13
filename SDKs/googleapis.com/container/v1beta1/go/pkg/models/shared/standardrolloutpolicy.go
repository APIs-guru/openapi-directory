package shared

type StandardRolloutPolicy struct {
	BatchNodeCount    *int32   `json:"batchNodeCount"`
	BatchPercentage   *float32 `json:"batchPercentage"`
	BatchSoakDuration *string  `json:"batchSoakDuration"`
}
