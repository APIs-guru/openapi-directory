package shared

type LiveChatModeratorSnippet struct {
	LiveChatID       *string                `json:"liveChatId,omitempty"`
	ModeratorDetails *ChannelProfileDetails `json:"moderatorDetails,omitempty"`
}
