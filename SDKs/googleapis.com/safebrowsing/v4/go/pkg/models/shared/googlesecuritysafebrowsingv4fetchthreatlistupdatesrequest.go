package shared

// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest
// Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest struct {
	Client             *GoogleSecuritySafebrowsingV4ClientInfo                                      `json:"client,omitempty"`
	ListUpdateRequests []GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest `json:"listUpdateRequests,omitempty"`
}
