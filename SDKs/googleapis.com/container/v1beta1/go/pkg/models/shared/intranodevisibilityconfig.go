package shared

// IntraNodeVisibilityConfig
// IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
type IntraNodeVisibilityConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
