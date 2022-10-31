package shared



type Stop struct {
    Address *Address `json:"address,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    Group *string `json:"group,omitempty"`
    PreparationTime *int64 `json:"preparation_time,omitempty"`
    TimeWindows []TimeWindow `json:"time_windows,omitempty"`
    
}

