package shared

type LiveChatMessageAuthorDetails struct {
	ChannelID       *string `json:"channelId"`
	ChannelURL      *string `json:"channelUrl"`
	DisplayName     *string `json:"displayName"`
	IsChatModerator *bool   `json:"isChatModerator"`
	IsChatOwner     *bool   `json:"isChatOwner"`
	IsChatSponsor   *bool   `json:"isChatSponsor"`
	IsVerified      *bool   `json:"isVerified"`
	ProfileImageURL *string `json:"profileImageUrl"`
}
