package shared

// WebpushFcmOptions
// Options for features provided by the FCM SDK for Web.
type WebpushFcmOptions struct {
	AnalyticsLabel *string `json:"analyticsLabel,omitempty"`
	Link           *string `json:"link,omitempty"`
}
