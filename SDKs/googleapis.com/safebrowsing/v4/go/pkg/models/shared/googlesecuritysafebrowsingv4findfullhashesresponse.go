package shared

type GoogleSecuritySafebrowsingV4FindFullHashesResponse struct {
	Matches               []GoogleSecuritySafebrowsingV4ThreatMatch `json:"matches"`
	MinimumWaitDuration   *string                                   `json:"minimumWaitDuration"`
	NegativeCacheDuration *string                                   `json:"negativeCacheDuration"`
}
