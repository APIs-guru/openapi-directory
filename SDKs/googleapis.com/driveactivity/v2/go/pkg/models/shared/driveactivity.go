package shared

type DriveActivity struct {
	Actions             []Action      `json:"actions"`
	Actors              []Actor       `json:"actors"`
	PrimaryActionDetail *ActionDetail `json:"primaryActionDetail"`
	Targets             []Target      `json:"targets"`
	TimeRange           *TimeRange    `json:"timeRange"`
	Timestamp           *string       `json:"timestamp"`
}
