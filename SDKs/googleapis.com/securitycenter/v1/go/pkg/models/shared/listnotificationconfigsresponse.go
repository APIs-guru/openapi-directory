package shared

// ListNotificationConfigsResponse
// Response message for listing notification configs.
type ListNotificationConfigsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	NotificationConfigs []NotificationConfig `json:"notificationConfigs,omitempty"`
}
