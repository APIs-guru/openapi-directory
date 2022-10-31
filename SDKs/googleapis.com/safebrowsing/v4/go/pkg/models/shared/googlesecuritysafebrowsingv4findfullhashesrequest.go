package shared

type GoogleSecuritySafebrowsingV4FindFullHashesRequest struct {
	APIClient    *GoogleSecuritySafebrowsingV4ClientInfo `json:"apiClient,omitempty"`
	Client       *GoogleSecuritySafebrowsingV4ClientInfo `json:"client,omitempty"`
	ClientStates []string                                `json:"clientStates,omitempty"`
	ThreatInfo   *GoogleSecuritySafebrowsingV4ThreatInfo `json:"threatInfo,omitempty"`
}
