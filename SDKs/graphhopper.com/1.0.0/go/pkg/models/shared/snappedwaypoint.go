package shared

// SnappedWaypoint
// Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
type SnappedWaypoint struct {
	Lat *float64 `json:"lat,omitempty"`
	Lon *float64 `json:"lon,omitempty"`
}
