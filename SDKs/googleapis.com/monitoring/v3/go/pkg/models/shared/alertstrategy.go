package shared

type AlertStrategy struct {
	AutoClose             *string                `json:"autoClose"`
	NotificationRateLimit *NotificationRateLimit `json:"notificationRateLimit"`
}
