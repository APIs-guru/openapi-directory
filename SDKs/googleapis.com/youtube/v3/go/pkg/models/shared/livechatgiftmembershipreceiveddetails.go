package shared

type LiveChatGiftMembershipReceivedDetails struct {
	AssociatedMembershipGiftingMessageID *string `json:"associatedMembershipGiftingMessageId,omitempty"`
	GifterChannelID                      *string `json:"gifterChannelId,omitempty"`
	MemberLevelName                      *string `json:"memberLevelName,omitempty"`
}
