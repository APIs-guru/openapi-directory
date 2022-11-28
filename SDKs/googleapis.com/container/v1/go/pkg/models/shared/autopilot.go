package shared

// Autopilot
// Autopilot is the configuration for Autopilot settings on the cluster.
type Autopilot struct {
	Enabled *bool `json:"enabled,omitempty"`
}
