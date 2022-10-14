package shared

type NetworkInfo struct {
	DisplayName    *string `json:"displayName,omitempty"`
	MatchedIPRange *string `json:"matchedIpRange,omitempty"`
	URI            *string `json:"uri,omitempty"`
}
