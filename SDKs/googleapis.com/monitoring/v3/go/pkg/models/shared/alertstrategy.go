package shared



type AlertStrategy struct {
    AutoClose *string `json:"autoClose,omitempty"`
    NotificationRateLimit *NotificationRateLimit `json:"notificationRateLimit,omitempty"`
    
}

