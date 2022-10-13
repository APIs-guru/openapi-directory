package shared

type SynchronizationResult struct {
	Added   *int32  `json:"added"`
	Failed  *int32  `json:"failed"`
	Ignored *bool   `json:"ignored"`
	Removed *int32  `json:"removed"`
	Status  *string `json:"status"`
	Updated *int32  `json:"updated"`
}
