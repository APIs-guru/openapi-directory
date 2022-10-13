package shared

type ChannelProfileDetails struct {
	ChannelID       *string `json:"channelId"`
	ChannelURL      *string `json:"channelUrl"`
	DisplayName     *string `json:"displayName"`
	ProfileImageURL *string `json:"profileImageUrl"`
}
