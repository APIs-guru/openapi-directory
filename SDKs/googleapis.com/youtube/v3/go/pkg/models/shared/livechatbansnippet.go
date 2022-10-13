package shared

type LiveChatBanSnippetTypeEnum string

const (
	LiveChatBanSnippetTypeEnumLiveChatBanTypeUnspecified LiveChatBanSnippetTypeEnum = "liveChatBanTypeUnspecified"
	LiveChatBanSnippetTypeEnumPermanent                  LiveChatBanSnippetTypeEnum = "permanent"
	LiveChatBanSnippetTypeEnumTemporary                  LiveChatBanSnippetTypeEnum = "temporary"
)

type LiveChatBanSnippet struct {
	BanDurationSeconds *string                     `json:"banDurationSeconds"`
	BannedUserDetails  *ChannelProfileDetails      `json:"bannedUserDetails"`
	LiveChatID         *string                     `json:"liveChatId"`
	Type               *LiveChatBanSnippetTypeEnum `json:"type"`
}
