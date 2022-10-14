package shared

type ListNotificationChannelDescriptorsResponse struct {
	ChannelDescriptors []NotificationChannelDescriptor `json:"channelDescriptors,omitempty"`
	NextPageToken      *string                         `json:"nextPageToken,omitempty"`
}
