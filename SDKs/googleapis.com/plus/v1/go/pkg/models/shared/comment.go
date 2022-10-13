package shared

import (
	"time"
)

type CommentActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId"`
}

type CommentActorClientSpecificActorInfo struct {
	YoutubeActorInfo *CommentActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo"`
}

type CommentActorImage struct {
	URL *string `json:"url"`
}

type CommentActorVerification struct {
	AdHocVerified *string `json:"adHocVerified"`
}

type CommentActor struct {
	ClientSpecificActorInfo *CommentActorClientSpecificActorInfo `json:"clientSpecificActorInfo"`
	DisplayName             *string                              `json:"displayName"`
	ID                      *string                              `json:"id"`
	Image                   *CommentActorImage                   `json:"image"`
	URL                     *string                              `json:"url"`
	Verification            *CommentActorVerification            `json:"verification"`
}

type CommentInReplyTo struct {
	ID  *string `json:"id"`
	URL *string `json:"url"`
}

type CommentObject struct {
	Content         *string `json:"content"`
	ObjectType      *string `json:"objectType"`
	OriginalContent *string `json:"originalContent"`
}

type CommentPlusoners struct {
	TotalItems *int64 `json:"totalItems"`
}

type Comment struct {
	Actor     *CommentActor      `json:"actor"`
	Etag      *string            `json:"etag"`
	ID        *string            `json:"id"`
	InReplyTo []CommentInReplyTo `json:"inReplyTo"`
	Kind      *string            `json:"kind"`
	Object    *CommentObject     `json:"object"`
	Plusoners *CommentPlusoners  `json:"plusoners"`
	Published *time.Time         `json:"published"`
	SelfLink  *string            `json:"selfLink"`
	Updated   *time.Time         `json:"updated"`
	Verb      *string            `json:"verb"`
}
