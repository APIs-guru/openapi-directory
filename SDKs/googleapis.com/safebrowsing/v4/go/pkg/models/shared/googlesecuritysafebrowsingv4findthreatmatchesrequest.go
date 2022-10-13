package shared

type GoogleSecuritySafebrowsingV4FindThreatMatchesRequest struct {
	Client     *GoogleSecuritySafebrowsingV4ClientInfo `json:"client"`
	ThreatInfo *GoogleSecuritySafebrowsingV4ThreatInfo `json:"threatInfo"`
}
