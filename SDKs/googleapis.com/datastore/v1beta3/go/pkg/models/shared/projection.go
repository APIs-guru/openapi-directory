package shared

// Projection
// A representation of a property in a projection.
type Projection struct {
	Property *PropertyReference `json:"property,omitempty"`
}
