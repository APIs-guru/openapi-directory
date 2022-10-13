package shared

type ListNotificationChannelsResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	NotificationChannels []NotificationChannel `json:"notificationChannels"`
	TotalSize            *int32                `json:"totalSize"`
}
