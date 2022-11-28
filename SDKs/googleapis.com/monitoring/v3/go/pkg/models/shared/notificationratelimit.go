package shared

// NotificationRateLimit
// Control over the rate of notifications sent to this alert policy's notification channels.
type NotificationRateLimit struct {
	Period *string `json:"period,omitempty"`
}
