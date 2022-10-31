package shared



type ListNotificationConfigsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NotificationConfigs []NotificationConfig `json:"notificationConfigs,omitempty"`
    
}

