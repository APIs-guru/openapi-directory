package shared

// AlertStrategy
// Control over how the notification channels in notification_channels are notified when this alert fires.
type AlertStrategy struct {
	AutoClose             *string                `json:"autoClose,omitempty"`
	NotificationRateLimit *NotificationRateLimit `json:"notificationRateLimit,omitempty"`
}
