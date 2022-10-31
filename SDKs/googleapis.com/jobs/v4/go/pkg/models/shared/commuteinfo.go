package shared



type CommuteInfo struct {
    JobLocation *Location `json:"jobLocation,omitempty"`
    TravelDuration *string `json:"travelDuration,omitempty"`
    
}

