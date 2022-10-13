package shared

type ResponseAddress struct {
	Lat             *float64         `json:"lat"`
	LocationID      *string          `json:"location_id"`
	Lon             *float64         `json:"lon"`
	Name            *string          `json:"name"`
	SnappedWaypoint *SnappedWaypoint `json:"snapped_waypoint"`
	StreetHint      *string          `json:"street_hint"`
}
