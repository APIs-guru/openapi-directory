package shared

import (
	"time"
)

type ActivityActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId,omitempty"`
}

type ActivityActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
}

type ActivityActorImage struct {
	URL *string `json:"url,omitempty"`
}

type ActivityActorName struct {
	FamilyName *string `json:"familyName,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}

type ActivityActorVerification struct {
	AdHocVerified *string `json:"adHocVerified,omitempty"`
}

type ActivityActor struct {
	ClientSpecificActorInfo *ActivityActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
	DisplayName             *string                               `json:"displayName,omitempty"`
	ID                      *string                               `json:"id,omitempty"`
	Image                   *ActivityActorImage                   `json:"image,omitempty"`
	Name                    *ActivityActorName                    `json:"name,omitempty"`
	URL                     *string                               `json:"url,omitempty"`
	Verification            *ActivityActorVerification            `json:"verification,omitempty"`
}

type ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId,omitempty"`
}

type ActivityObjectActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
}

type ActivityObjectActorImage struct {
	URL *string `json:"url,omitempty"`
}

type ActivityObjectActorVerification struct {
	AdHocVerified *string `json:"adHocVerified,omitempty"`
}

type ActivityObjectActor struct {
	ClientSpecificActorInfo *ActivityObjectActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
	DisplayName             *string                                     `json:"displayName,omitempty"`
	ID                      *string                                     `json:"id,omitempty"`
	Image                   *ActivityObjectActorImage                   `json:"image,omitempty"`
	URL                     *string                                     `json:"url,omitempty"`
	Verification            *ActivityObjectActorVerification            `json:"verification,omitempty"`
}

type ActivityObjectAttachmentsEmbed struct {
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type ActivityObjectAttachmentsFullImage struct {
	Height *int64  `json:"height,omitempty"`
	Type   *string `json:"type,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

type ActivityObjectAttachmentsImage struct {
	Height *int64  `json:"height,omitempty"`
	Type   *string `json:"type,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

type ActivityObjectAttachmentsThumbnailsImage struct {
	Height *int64  `json:"height,omitempty"`
	Type   *string `json:"type,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

type ActivityObjectAttachmentsThumbnails struct {
	Description *string                                   `json:"description,omitempty"`
	Image       *ActivityObjectAttachmentsThumbnailsImage `json:"image,omitempty"`
	URL         *string                                   `json:"url,omitempty"`
}

type ActivityObjectAttachments struct {
	Content     *string                               `json:"content,omitempty"`
	DisplayName *string                               `json:"displayName,omitempty"`
	Embed       *ActivityObjectAttachmentsEmbed       `json:"embed,omitempty"`
	FullImage   *ActivityObjectAttachmentsFullImage   `json:"fullImage,omitempty"`
	ID          *string                               `json:"id,omitempty"`
	Image       *ActivityObjectAttachmentsImage       `json:"image,omitempty"`
	ObjectType  *string                               `json:"objectType,omitempty"`
	Thumbnails  []ActivityObjectAttachmentsThumbnails `json:"thumbnails,omitempty"`
	URL         *string                               `json:"url,omitempty"`
}

type ActivityObjectPlusoners struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

type ActivityObjectReplies struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

type ActivityObjectResharers struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

type ActivityObject struct {
	Actor           *ActivityObjectActor        `json:"actor,omitempty"`
	Attachments     []ActivityObjectAttachments `json:"attachments,omitempty"`
	Content         *string                     `json:"content,omitempty"`
	ID              *string                     `json:"id,omitempty"`
	ObjectType      *string                     `json:"objectType,omitempty"`
	OriginalContent *string                     `json:"originalContent,omitempty"`
	Plusoners       *ActivityObjectPlusoners    `json:"plusoners,omitempty"`
	Replies         *ActivityObjectReplies      `json:"replies,omitempty"`
	Resharers       *ActivityObjectResharers    `json:"resharers,omitempty"`
	URL             *string                     `json:"url,omitempty"`
}

type ActivityProvider struct {
	Title *string `json:"title,omitempty"`
}

type Activity struct {
	Access          *ACL              `json:"access,omitempty"`
	Actor           *ActivityActor    `json:"actor,omitempty"`
	Address         *string           `json:"address,omitempty"`
	Annotation      *string           `json:"annotation,omitempty"`
	CrosspostSource *string           `json:"crosspostSource,omitempty"`
	Etag            *string           `json:"etag,omitempty"`
	Geocode         *string           `json:"geocode,omitempty"`
	ID              *string           `json:"id,omitempty"`
	Kind            *string           `json:"kind,omitempty"`
	Location        *Place            `json:"location,omitempty"`
	Object          *ActivityObject   `json:"object,omitempty"`
	PlaceID         *string           `json:"placeId,omitempty"`
	PlaceName       *string           `json:"placeName,omitempty"`
	Provider        *ActivityProvider `json:"provider,omitempty"`
	Published       *time.Time        `json:"published,omitempty"`
	Radius          *string           `json:"radius,omitempty"`
	Title           *string           `json:"title,omitempty"`
	Updated         *time.Time        `json:"updated,omitempty"`
	URL             *string           `json:"url,omitempty"`
	Verb            *string           `json:"verb,omitempty"`
}
