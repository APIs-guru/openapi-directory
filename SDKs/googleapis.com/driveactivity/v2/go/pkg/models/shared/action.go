package shared

type Action struct {
	Actor     *Actor        `json:"actor"`
	Detail    *ActionDetail `json:"detail"`
	Target    *Target       `json:"target"`
	TimeRange *TimeRange    `json:"timeRange"`
	Timestamp *string       `json:"timestamp"`
}
