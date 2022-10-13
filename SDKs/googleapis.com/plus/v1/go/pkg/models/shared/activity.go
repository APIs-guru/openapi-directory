package shared

import (
	"time"
)

type ActivityActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId"`
}

type ActivityActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo"`
}

type ActivityActorImage struct {
	URL *string `json:"url"`
}

type ActivityActorName struct {
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
}

type ActivityActorVerification struct {
	AdHocVerified *string `json:"adHocVerified"`
}

type ActivityActor struct {
	ClientSpecificActorInfo *ActivityActorClientSpecificActorInfo `json:"clientSpecificActorInfo"`
	DisplayName             *string                               `json:"displayName"`
	ID                      *string                               `json:"id"`
	Image                   *ActivityActorImage                   `json:"image"`
	Name                    *ActivityActorName                    `json:"name"`
	URL                     *string                               `json:"url"`
	Verification            *ActivityActorVerification            `json:"verification"`
}

type ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId"`
}

type ActivityObjectActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo"`
}

type ActivityObjectActorImage struct {
	URL *string `json:"url"`
}

type ActivityObjectActorVerification struct {
	AdHocVerified *string `json:"adHocVerified"`
}

type ActivityObjectActor struct {
	ClientSpecificActorInfo *ActivityObjectActorClientSpecificActorInfo `json:"clientSpecificActorInfo"`
	DisplayName             *string                                     `json:"displayName"`
	ID                      *string                                     `json:"id"`
	Image                   *ActivityObjectActorImage                   `json:"image"`
	URL                     *string                                     `json:"url"`
	Verification            *ActivityObjectActorVerification            `json:"verification"`
}

type ActivityObjectAttachmentsEmbed struct {
	Type *string `json:"type"`
	URL  *string `json:"url"`
}

type ActivityObjectAttachmentsFullImage struct {
	Height *int64  `json:"height"`
	Type   *string `json:"type"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type ActivityObjectAttachmentsImage struct {
	Height *int64  `json:"height"`
	Type   *string `json:"type"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type ActivityObjectAttachmentsThumbnailsImage struct {
	Height *int64  `json:"height"`
	Type   *string `json:"type"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type ActivityObjectAttachmentsThumbnails struct {
	Description *string                                   `json:"description"`
	Image       *ActivityObjectAttachmentsThumbnailsImage `json:"image"`
	URL         *string                                   `json:"url"`
}

type ActivityObjectAttachments struct {
	Content     *string                               `json:"content"`
	DisplayName *string                               `json:"displayName"`
	Embed       *ActivityObjectAttachmentsEmbed       `json:"embed"`
	FullImage   *ActivityObjectAttachmentsFullImage   `json:"fullImage"`
	ID          *string                               `json:"id"`
	Image       *ActivityObjectAttachmentsImage       `json:"image"`
	ObjectType  *string                               `json:"objectType"`
	Thumbnails  []ActivityObjectAttachmentsThumbnails `json:"thumbnails"`
	URL         *string                               `json:"url"`
}

type ActivityObjectPlusoners struct {
	SelfLink   *string `json:"selfLink"`
	TotalItems *int64  `json:"totalItems"`
}

type ActivityObjectReplies struct {
	SelfLink   *string `json:"selfLink"`
	TotalItems *int64  `json:"totalItems"`
}

type ActivityObjectResharers struct {
	SelfLink   *string `json:"selfLink"`
	TotalItems *int64  `json:"totalItems"`
}

type ActivityObject struct {
	Actor           *ActivityObjectActor        `json:"actor"`
	Attachments     []ActivityObjectAttachments `json:"attachments"`
	Content         *string                     `json:"content"`
	ID              *string                     `json:"id"`
	ObjectType      *string                     `json:"objectType"`
	OriginalContent *string                     `json:"originalContent"`
	Plusoners       *ActivityObjectPlusoners    `json:"plusoners"`
	Replies         *ActivityObjectReplies      `json:"replies"`
	Resharers       *ActivityObjectResharers    `json:"resharers"`
	URL             *string                     `json:"url"`
}

type ActivityProvider struct {
	Title *string `json:"title"`
}

type Activity struct {
	Access          *ACL              `json:"access"`
	Actor           *ActivityActor    `json:"actor"`
	Address         *string           `json:"address"`
	Annotation      *string           `json:"annotation"`
	CrosspostSource *string           `json:"crosspostSource"`
	Etag            *string           `json:"etag"`
	Geocode         *string           `json:"geocode"`
	ID              *string           `json:"id"`
	Kind            *string           `json:"kind"`
	Location        *Place            `json:"location"`
	Object          *ActivityObject   `json:"object"`
	PlaceID         *string           `json:"placeId"`
	PlaceName       *string           `json:"placeName"`
	Provider        *ActivityProvider `json:"provider"`
	Published       *time.Time        `json:"published"`
	Radius          *string           `json:"radius"`
	Title           *string           `json:"title"`
	Updated         *time.Time        `json:"updated"`
	URL             *string           `json:"url"`
	Verb            *string           `json:"verb"`
}
