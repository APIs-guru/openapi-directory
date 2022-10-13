package shared

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest struct {
	Client             *GoogleSecuritySafebrowsingV4ClientInfo                                      `json:"client"`
	ListUpdateRequests []GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest `json:"listUpdateRequests"`
}
