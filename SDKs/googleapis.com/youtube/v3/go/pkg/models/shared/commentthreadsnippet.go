package shared

type CommentThreadSnippet struct {
	CanReply        *bool    `json:"canReply,omitempty"`
	ChannelID       *string  `json:"channelId,omitempty"`
	IsPublic        *bool    `json:"isPublic,omitempty"`
	TopLevelComment *Comment `json:"topLevelComment,omitempty"`
	TotalReplyCount *int64   `json:"totalReplyCount,omitempty"`
	VideoID         *string  `json:"videoId,omitempty"`
}
