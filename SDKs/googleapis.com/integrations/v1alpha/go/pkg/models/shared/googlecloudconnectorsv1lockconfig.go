package shared

// GoogleCloudConnectorsV1LockConfig
// Determines whether or no a connection is locked. If locked, a reason must be specified.
type GoogleCloudConnectorsV1LockConfig struct {
	Locked *bool   `json:"locked,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
