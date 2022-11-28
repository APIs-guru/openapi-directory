package shared

import (
	"time"
)

// ActivityActorClientSpecificActorInfoYoutubeActorInfo
// Actor info specific to YouTube clients.
type ActivityActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId,omitempty"`
}

// ActivityActorClientSpecificActorInfo
// Actor info specific to particular clients.
type ActivityActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
}

// ActivityActorImage
// The image representation of the actor.
type ActivityActorImage struct {
	URL *string `json:"url,omitempty"`
}

// ActivityActorName
// An object representation of the individual components of name.
type ActivityActorName struct {
	FamilyName *string `json:"familyName,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}

// ActivityActorVerification
// Verification status of actor.
type ActivityActorVerification struct {
	AdHocVerified *string `json:"adHocVerified,omitempty"`
}

// ActivityActor
// The person who performed this activity.
type ActivityActor struct {
	ClientSpecificActorInfo *ActivityActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
	DisplayName             *string                               `json:"displayName,omitempty"`
	ID                      *string                               `json:"id,omitempty"`
	Image                   *ActivityActorImage                   `json:"image,omitempty"`
	Name                    *ActivityActorName                    `json:"name,omitempty"`
	URL                     *string                               `json:"url,omitempty"`
	Verification            *ActivityActorVerification            `json:"verification,omitempty"`
}

// ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
// Actor info specific to YouTube clients.
type ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo struct {
	ChannelID *string `json:"channelId,omitempty"`
}

// ActivityObjectActorClientSpecificActorInfo
// Actor info specific to particular clients.
type ActivityObjectActorClientSpecificActorInfo struct {
	YoutubeActorInfo *ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
}

// ActivityObjectActorImage
// The image representation of the original actor.
type ActivityObjectActorImage struct {
	URL *string `json:"url,omitempty"`
}

// ActivityObjectActorVerification
// Verification status of actor.
type ActivityObjectActorVerification struct {
	AdHocVerified *string `json:"adHocVerified,omitempty"`
}

// ActivityObjectActor
// If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
type ActivityObjectActor struct {
	ClientSpecificActorInfo *ActivityObjectActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
	DisplayName             *string                                     `json:"displayName,omitempty"`
	ID                      *string                                     `json:"id,omitempty"`
	Image                   *ActivityObjectActorImage                   `json:"image,omitempty"`
	URL                     *string                                     `json:"url,omitempty"`
	Verification            *ActivityObjectActorVerification            `json:"verification,omitempty"`
}

// ActivityObjectAttachmentsEmbed
// If the attachment is a video, the embeddable link.
type ActivityObjectAttachmentsEmbed struct {
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

// ActivityObjectAttachmentsFullImage
// The full image URL for photo attachments.
type ActivityObjectAttachmentsFullImage struct {
	Height *int64  `json:"height,omitempty"`
	Type   *string `json:"type,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

// ActivityObjectAttachmentsImage
// The preview image for photos or videos.
type ActivityObjectAttachmentsImage struct {
	Height *int64  `json:"height,omitempty"`
	Type   *string `json:"type,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

// ActivityObjectAttachmentsThumbnailsImage
// Image resource.
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

// ActivityObjectPlusoners
// People who +1'd this activity.
type ActivityObjectPlusoners struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

// ActivityObjectReplies
// Comments in reply to this activity.
type ActivityObjectReplies struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

// ActivityObjectResharers
// People who reshared this activity.
type ActivityObjectResharers struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int64  `json:"totalItems,omitempty"`
}

// ActivityObject
// The object of this activity.
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

// ActivityProvider
// The service provider that initially published this activity.
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
