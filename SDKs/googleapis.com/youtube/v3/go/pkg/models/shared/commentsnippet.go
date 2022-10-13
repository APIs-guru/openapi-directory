package shared

import (
	"time"
)

type CommentSnippetModerationStatusEnum string

const (
	CommentSnippetModerationStatusEnumPublished     CommentSnippetModerationStatusEnum = "published"
	CommentSnippetModerationStatusEnumHeldForReview CommentSnippetModerationStatusEnum = "heldForReview"
	CommentSnippetModerationStatusEnumLikelySpam    CommentSnippetModerationStatusEnum = "likelySpam"
	CommentSnippetModerationStatusEnumRejected      CommentSnippetModerationStatusEnum = "rejected"
)

type CommentSnippetViewerRatingEnum string

const (
	CommentSnippetViewerRatingEnumNone    CommentSnippetViewerRatingEnum = "none"
	CommentSnippetViewerRatingEnumLike    CommentSnippetViewerRatingEnum = "like"
	CommentSnippetViewerRatingEnumDislike CommentSnippetViewerRatingEnum = "dislike"
)

type CommentSnippet struct {
	AuthorChannelID       *CommentSnippetAuthorChannelID      `json:"authorChannelId"`
	AuthorChannelURL      *string                             `json:"authorChannelUrl"`
	AuthorDisplayName     *string                             `json:"authorDisplayName"`
	AuthorProfileImageURL *string                             `json:"authorProfileImageUrl"`
	CanRate               *bool                               `json:"canRate"`
	ChannelID             *string                             `json:"channelId"`
	LikeCount             *int64                              `json:"likeCount"`
	ModerationStatus      *CommentSnippetModerationStatusEnum `json:"moderationStatus"`
	ParentID              *string                             `json:"parentId"`
	PublishedAt           *time.Time                          `json:"publishedAt"`
	TextDisplay           *string                             `json:"textDisplay"`
	TextOriginal          *string                             `json:"textOriginal"`
	UpdatedAt             *time.Time                          `json:"updatedAt"`
	VideoID               *string                             `json:"videoId"`
	ViewerRating          *CommentSnippetViewerRatingEnum     `json:"viewerRating"`
}
