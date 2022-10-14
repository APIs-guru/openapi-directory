package shared

type ChannelProfileDetails struct {
	ChannelID       *string `json:"channelId,omitempty"`
	ChannelURL      *string `json:"channelUrl,omitempty"`
	DisplayName     *string `json:"displayName,omitempty"`
	ProfileImageURL *string `json:"profileImageUrl,omitempty"`
}
