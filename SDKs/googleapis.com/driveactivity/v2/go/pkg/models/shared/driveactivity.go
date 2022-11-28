package shared

// DriveActivity
// A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
type DriveActivity struct {
	Actions             []Action      `json:"actions,omitempty"`
	Actors              []Actor       `json:"actors,omitempty"`
	PrimaryActionDetail *ActionDetail `json:"primaryActionDetail,omitempty"`
	Targets             []Target      `json:"targets,omitempty"`
	TimeRange           *TimeRange    `json:"timeRange,omitempty"`
	Timestamp           *string       `json:"timestamp,omitempty"`
}
