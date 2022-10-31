package shared



type Response struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    IP *string `json:"ip,omitempty"`
    Latitude *float32 `json:"latitude,omitempty"`
    Longitude *float32 `json:"longitude,omitempty"`
    State *string `json:"state,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

