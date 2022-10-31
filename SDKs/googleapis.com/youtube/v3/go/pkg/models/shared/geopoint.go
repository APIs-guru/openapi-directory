package shared



type GeoPoint struct {
    Altitude *float64 `json:"altitude,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    
}

