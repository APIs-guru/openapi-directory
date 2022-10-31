package shared



type LocationDrivingDirectionMetrics struct {
    LocationName *string `json:"locationName,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    TopDirectionSources []TopDirectionSources `json:"topDirectionSources,omitempty"`
    
}

