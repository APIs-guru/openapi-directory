package shared

type GoogleSecuritySafebrowsingV4FindFullHashesResponse struct {
	Matches               []GoogleSecuritySafebrowsingV4ThreatMatch `json:"matches,omitempty"`
	MinimumWaitDuration   *string                                   `json:"minimumWaitDuration,omitempty"`
	NegativeCacheDuration *string                                   `json:"negativeCacheDuration,omitempty"`
}
