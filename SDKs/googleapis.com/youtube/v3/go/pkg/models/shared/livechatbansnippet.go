package shared




type LiveChatBanSnippetTypeEnum string

const (
    LiveChatBanSnippetTypeEnumLiveChatBanTypeUnspecified LiveChatBanSnippetTypeEnum = "liveChatBanTypeUnspecified"
LiveChatBanSnippetTypeEnumPermanent LiveChatBanSnippetTypeEnum = "permanent"
LiveChatBanSnippetTypeEnumTemporary LiveChatBanSnippetTypeEnum = "temporary"
)


type LiveChatBanSnippet struct {
    BanDurationSeconds *string `json:"banDurationSeconds,omitempty"`
    BannedUserDetails *ChannelProfileDetails `json:"bannedUserDetails,omitempty"`
    LiveChatID *string `json:"liveChatId,omitempty"`
    Type *LiveChatBanSnippetTypeEnum `json:"type,omitempty"`
    
}

