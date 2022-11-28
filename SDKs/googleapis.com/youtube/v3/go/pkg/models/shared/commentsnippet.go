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

// CommentSnippet
// Basic details about a comment, such as its author and text.
type CommentSnippet struct {
	AuthorChannelID       *CommentSnippetAuthorChannelID      `json:"authorChannelId,omitempty"`
	AuthorChannelURL      *string                             `json:"authorChannelUrl,omitempty"`
	AuthorDisplayName     *string                             `json:"authorDisplayName,omitempty"`
	AuthorProfileImageURL *string                             `json:"authorProfileImageUrl,omitempty"`
	CanRate               *bool                               `json:"canRate,omitempty"`
	ChannelID             *string                             `json:"channelId,omitempty"`
	LikeCount             *int64                              `json:"likeCount,omitempty"`
	ModerationStatus      *CommentSnippetModerationStatusEnum `json:"moderationStatus,omitempty"`
	ParentID              *string                             `json:"parentId,omitempty"`
	PublishedAt           *time.Time                          `json:"publishedAt,omitempty"`
	TextDisplay           *string                             `json:"textDisplay,omitempty"`
	TextOriginal          *string                             `json:"textOriginal,omitempty"`
	UpdatedAt             *time.Time                          `json:"updatedAt,omitempty"`
	VideoID               *string                             `json:"videoId,omitempty"`
	ViewerRating          *CommentSnippetViewerRatingEnum     `json:"viewerRating,omitempty"`
}
