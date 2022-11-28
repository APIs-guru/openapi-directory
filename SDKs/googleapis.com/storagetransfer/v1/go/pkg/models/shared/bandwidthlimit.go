package shared

// BandwidthLimit
// Specifies a bandwidth limit for an agent pool.
type BandwidthLimit struct {
	LimitMbps *string `json:"limitMbps,omitempty"`
}
