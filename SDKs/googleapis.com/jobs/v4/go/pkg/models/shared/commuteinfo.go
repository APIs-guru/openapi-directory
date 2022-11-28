package shared

// CommuteInfo
// Commute details related to this job.
type CommuteInfo struct {
	JobLocation    *Location `json:"jobLocation,omitempty"`
	TravelDuration *string   `json:"travelDuration,omitempty"`
}
