package shared

type AnalyticsInfo struct {
	GooglePlayAnalytics    *GooglePlayAnalytics    `json:"googlePlayAnalytics,omitempty"`
	ItunesConnectAnalytics *ITunesConnectAnalytics `json:"itunesConnectAnalytics,omitempty"`
}
