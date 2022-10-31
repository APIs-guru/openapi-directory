package shared



type ResponseAddress struct {
    Lat *float64 `json:"lat,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Lon *float64 `json:"lon,omitempty"`
    Name *string `json:"name,omitempty"`
    SnappedWaypoint *SnappedWaypoint `json:"snapped_waypoint,omitempty"`
    StreetHint *string `json:"street_hint,omitempty"`
    
}

