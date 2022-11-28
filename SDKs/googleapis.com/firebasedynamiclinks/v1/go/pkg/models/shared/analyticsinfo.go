package shared

// AnalyticsInfo
// Tracking parameters supported by Dynamic Link.
type AnalyticsInfo struct {
	GooglePlayAnalytics    *GooglePlayAnalytics    `json:"googlePlayAnalytics,omitempty"`
	ItunesConnectAnalytics *ITunesConnectAnalytics `json:"itunesConnectAnalytics,omitempty"`
}
