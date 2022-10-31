package shared



type TimezonesViewModel struct {
    Name *string `json:"name,omitempty"`
    Region *string `json:"region,omitempty"`
    TimezoneIanna *string `json:"timezoneIanna,omitempty"`
    TzOffset *int32 `json:"tzOffset,omitempty"`
    
}

