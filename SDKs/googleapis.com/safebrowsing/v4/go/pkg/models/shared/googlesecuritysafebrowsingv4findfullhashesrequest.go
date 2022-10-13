package shared

type GoogleSecuritySafebrowsingV4FindFullHashesRequest struct {
	APIClient    *GoogleSecuritySafebrowsingV4ClientInfo `json:"apiClient"`
	Client       *GoogleSecuritySafebrowsingV4ClientInfo `json:"client"`
	ClientStates []string                                `json:"clientStates"`
	ThreatInfo   *GoogleSecuritySafebrowsingV4ThreatInfo `json:"threatInfo"`
}
