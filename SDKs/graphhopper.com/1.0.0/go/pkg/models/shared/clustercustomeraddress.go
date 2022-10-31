package shared



type ClusterCustomerAddress struct {
    Lat *float64 `json:"lat,omitempty"`
    Lon *float64 `json:"lon,omitempty"`
    StreetHint *string `json:"street_hint,omitempty"`
    
}

