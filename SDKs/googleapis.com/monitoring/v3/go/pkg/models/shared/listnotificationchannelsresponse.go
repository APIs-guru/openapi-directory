package shared

// ListNotificationChannelsResponse
// The ListNotificationChannels response.
type ListNotificationChannelsResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	NotificationChannels []NotificationChannel `json:"notificationChannels,omitempty"`
	TotalSize            *int32                `json:"totalSize,omitempty"`
}
