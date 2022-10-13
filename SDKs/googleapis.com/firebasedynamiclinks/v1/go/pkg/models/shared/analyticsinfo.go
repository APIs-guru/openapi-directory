package shared

type AnalyticsInfo struct {
	GooglePlayAnalytics    *GooglePlayAnalytics    `json:"googlePlayAnalytics"`
	ItunesConnectAnalytics *ITunesConnectAnalytics `json:"itunesConnectAnalytics"`
}
