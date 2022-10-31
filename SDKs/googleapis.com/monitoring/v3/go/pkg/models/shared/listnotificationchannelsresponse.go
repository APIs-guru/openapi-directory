package shared



type ListNotificationChannelsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NotificationChannels []NotificationChannel `json:"notificationChannels,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

