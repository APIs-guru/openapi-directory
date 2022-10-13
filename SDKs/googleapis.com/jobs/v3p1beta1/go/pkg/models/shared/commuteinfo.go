package shared

type CommuteInfo struct {
	JobLocation    *Location `json:"jobLocation"`
	TravelDuration *string   `json:"travelDuration"`
}
