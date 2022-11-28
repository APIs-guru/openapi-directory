package shared

// Configuration
// Specifies general configurations that are taken into account when solving the vehicle routing problem.
type Configuration struct {
	Routing *Routing `json:"routing,omitempty"`
}
