package shared

type NetworkInfo struct {
	DisplayName    *string `json:"displayName"`
	MatchedIPRange *string `json:"matchedIpRange"`
	URI            *string `json:"uri"`
}
