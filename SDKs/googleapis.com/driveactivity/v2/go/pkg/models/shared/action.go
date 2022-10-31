package shared

type Action struct {
	Actor     *Actor        `json:"actor,omitempty"`
	Detail    *ActionDetail `json:"detail,omitempty"`
	Target    *Target       `json:"target,omitempty"`
	TimeRange *TimeRange    `json:"timeRange,omitempty"`
	Timestamp *string       `json:"timestamp,omitempty"`
}
