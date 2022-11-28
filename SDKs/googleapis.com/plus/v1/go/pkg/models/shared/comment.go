package shared

import (
	"time"
)

// CommentActorClientSpecificActorInfoYoutubeActorInfo
// Actor info specific to YouTube clients.
type CommentActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId,omitempty"`
}

// CommentActorClientSpecificActorInfo
// Actor info specific to particular clients.
type CommentActorClientSpecificActorInfo struct {
	YoutubeActorInfo *CommentActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
}

// CommentActorImage
// The image representation of this actor.
type CommentActorImage struct {
	URL *string `json:"url,omitempty"`
}

// CommentActorVerification
// Verification status of actor.
type CommentActorVerification struct {
	AdHocVerified *string `json:"adHocVerified,omitempty"`
}

// CommentActor
// The person who posted this comment.
type CommentActor struct {
	ClientSpecificActorInfo *CommentActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
	DisplayName             *string                              `json:"displayName,omitempty"`
	ID                      *string                              `json:"id,omitempty"`
	Image                   *CommentActorImage                   `json:"image,omitempty"`
	URL                     *string                              `json:"url,omitempty"`
	Verification            *CommentActorVerification            `json:"verification,omitempty"`
}

type CommentInReplyTo struct {
	ID  *string `json:"id,omitempty"`
	URL *string `json:"url,omitempty"`
}

// CommentObject
// The object of this comment.
type CommentObject struct {
	Content         *string `json:"content,omitempty"`
	ObjectType      *string `json:"objectType,omitempty"`
	OriginalContent *string `json:"originalContent,omitempty"`
}

// CommentPlusoners
// People who +1'd this comment.
type CommentPlusoners struct {
	TotalItems *int64 `json:"totalItems,omitempty"`
}

type Comment struct {
	Actor     *CommentActor      `json:"actor,omitempty"`
	Etag      *string            `json:"etag,omitempty"`
	ID        *string            `json:"id,omitempty"`
	InReplyTo []CommentInReplyTo `json:"inReplyTo,omitempty"`
	Kind      *string            `json:"kind,omitempty"`
	Object    *CommentObject     `json:"object,omitempty"`
	Plusoners *CommentPlusoners  `json:"plusoners,omitempty"`
	Published *time.Time         `json:"published,omitempty"`
	SelfLink  *string            `json:"selfLink,omitempty"`
	Updated   *time.Time         `json:"updated,omitempty"`
	Verb      *string            `json:"verb,omitempty"`
}
