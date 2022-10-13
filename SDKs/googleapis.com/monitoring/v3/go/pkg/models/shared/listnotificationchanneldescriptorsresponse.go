package shared

type ListNotificationChannelDescriptorsResponse struct {
	ChannelDescriptors []NotificationChannelDescriptor `json:"channelDescriptors"`
	NextPageToken      *string                         `json:"nextPageToken"`
}
