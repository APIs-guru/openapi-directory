package shared

// LockConfig
// Determines whether or no a connection is locked. If locked, a reason must be specified.
type LockConfig struct {
	Locked *bool   `json:"locked,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
