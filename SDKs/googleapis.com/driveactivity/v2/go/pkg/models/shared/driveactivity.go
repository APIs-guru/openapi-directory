package shared

type DriveActivity struct {
	Actions             []Action      `json:"actions,omitempty"`
	Actors              []Actor       `json:"actors,omitempty"`
	PrimaryActionDetail *ActionDetail `json:"primaryActionDetail,omitempty"`
	Targets             []Target      `json:"targets,omitempty"`
	TimeRange           *TimeRange    `json:"timeRange,omitempty"`
	Timestamp           *string       `json:"timestamp,omitempty"`
}
