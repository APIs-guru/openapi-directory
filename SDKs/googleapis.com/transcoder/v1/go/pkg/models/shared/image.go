package shared



type Image struct {
    Alpha *float64 `json:"alpha,omitempty"`
    Resolution *NormalizedCoordinate `json:"resolution,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

