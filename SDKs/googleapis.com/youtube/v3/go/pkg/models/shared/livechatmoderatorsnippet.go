package shared

type LiveChatModeratorSnippet struct {
	LiveChatID       *string                `json:"liveChatId"`
	ModeratorDetails *ChannelProfileDetails `json:"moderatorDetails"`
}
