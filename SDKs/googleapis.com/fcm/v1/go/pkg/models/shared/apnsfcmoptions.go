package shared

// ApnsFcmOptions
// Options for features provided by the FCM SDK for iOS.
type ApnsFcmOptions struct {
	AnalyticsLabel *string `json:"analyticsLabel,omitempty"`
	Image          *string `json:"image,omitempty"`
}
