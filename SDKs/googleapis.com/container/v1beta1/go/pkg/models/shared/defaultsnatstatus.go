package shared

// DefaultSnatStatus
// DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
type DefaultSnatStatus struct {
	Disabled *bool `json:"disabled,omitempty"`
}
