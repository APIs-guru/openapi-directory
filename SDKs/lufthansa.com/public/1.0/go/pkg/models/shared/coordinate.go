package shared

// Coordinate
// Container for coordinates.
type Coordinate struct {
	Latitude  *float32 `json:"Latitude,omitempty"`
	Longitude *float32 `json:"Longitude,omitempty"`
}
