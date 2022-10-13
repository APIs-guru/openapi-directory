package shared

type LiveChatGiftMembershipReceivedDetails struct {
	AssociatedMembershipGiftingMessageID *string `json:"associatedMembershipGiftingMessageId"`
	GifterChannelID                      *string `json:"gifterChannelId"`
	MemberLevelName                      *string `json:"memberLevelName"`
}
