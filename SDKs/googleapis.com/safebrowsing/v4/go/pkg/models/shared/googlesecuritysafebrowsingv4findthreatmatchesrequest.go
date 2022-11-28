package shared

// GoogleSecuritySafebrowsingV4FindThreatMatchesRequest
// Request to check entries against lists.
type GoogleSecuritySafebrowsingV4FindThreatMatchesRequest struct {
	Client     *GoogleSecuritySafebrowsingV4ClientInfo `json:"client,omitempty"`
	ThreatInfo *GoogleSecuritySafebrowsingV4ThreatInfo `json:"threatInfo,omitempty"`
}
