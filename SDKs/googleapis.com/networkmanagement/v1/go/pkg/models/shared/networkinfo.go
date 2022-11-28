package shared

// NetworkInfo
// For display only. Metadata associated with a Compute Engine network.
type NetworkInfo struct {
	DisplayName    *string `json:"displayName,omitempty"`
	MatchedIPRange *string `json:"matchedIpRange,omitempty"`
	URI            *string `json:"uri,omitempty"`
}
