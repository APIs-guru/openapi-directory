package shared

// IlbSubsettingConfig
// ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
type IlbSubsettingConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
