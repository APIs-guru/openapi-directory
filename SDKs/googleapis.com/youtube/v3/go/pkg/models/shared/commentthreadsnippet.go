package shared

type CommentThreadSnippet struct {
	CanReply        *bool    `json:"canReply"`
	ChannelID       *string  `json:"channelId"`
	IsPublic        *bool    `json:"isPublic"`
	TopLevelComment *Comment `json:"topLevelComment"`
	TotalReplyCount *int64   `json:"totalReplyCount"`
	VideoID         *string  `json:"videoId"`
}
