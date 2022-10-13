package shared

type ListNotificationConfigsResponse struct {
	NextPageToken       *string              `json:"nextPageToken"`
	NotificationConfigs []NotificationConfig `json:"notificationConfigs"`
}
