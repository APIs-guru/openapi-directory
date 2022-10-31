package shared

type LiveChatMessageAuthorDetails struct {
	ChannelID       *string `json:"channelId,omitempty"`
	ChannelURL      *string `json:"channelUrl,omitempty"`
	DisplayName     *string `json:"displayName,omitempty"`
	IsChatModerator *bool   `json:"isChatModerator,omitempty"`
	IsChatOwner     *bool   `json:"isChatOwner,omitempty"`
	IsChatSponsor   *bool   `json:"isChatSponsor,omitempty"`
	IsVerified      *bool   `json:"isVerified,omitempty"`
	ProfileImageURL *string `json:"profileImageUrl,omitempty"`
}
