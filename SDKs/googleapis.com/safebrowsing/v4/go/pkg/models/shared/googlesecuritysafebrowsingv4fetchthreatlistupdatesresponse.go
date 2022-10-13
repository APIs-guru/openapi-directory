package shared

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse struct {
	ListUpdateResponses []GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse `json:"listUpdateResponses"`
	MinimumWaitDuration *string                                                                        `json:"minimumWaitDuration"`
}
