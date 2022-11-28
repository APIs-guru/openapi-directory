package shared

// IndoorLevel
// Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.
type IndoorLevel struct {
	Name *string `json:"name,omitempty"`
}
