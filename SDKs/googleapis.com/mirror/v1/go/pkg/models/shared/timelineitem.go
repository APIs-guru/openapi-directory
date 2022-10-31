package shared

import (
	"time"
)

type TimelineItem struct {
	Attachments   []Attachment        `json:"attachments,omitempty"`
	BundleID      *string             `json:"bundleId,omitempty"`
	CanonicalURL  *string             `json:"canonicalUrl,omitempty"`
	Created       *time.Time          `json:"created,omitempty"`
	Creator       *Contact            `json:"creator,omitempty"`
	DisplayTime   *time.Time          `json:"displayTime,omitempty"`
	Etag          *string             `json:"etag,omitempty"`
	HTML          *string             `json:"html,omitempty"`
	ID            *string             `json:"id,omitempty"`
	InReplyTo     *string             `json:"inReplyTo,omitempty"`
	IsBundleCover *bool               `json:"isBundleCover,omitempty"`
	IsDeleted     *bool               `json:"isDeleted,omitempty"`
	IsPinned      *bool               `json:"isPinned,omitempty"`
	Kind          *string             `json:"kind,omitempty"`
	Location      *Location           `json:"location,omitempty"`
	MenuItems     []MenuItem          `json:"menuItems,omitempty"`
	Notification  *NotificationConfig `json:"notification,omitempty"`
	PinScore      *int32              `json:"pinScore,omitempty"`
	Recipients    []Contact           `json:"recipients,omitempty"`
	SelfLink      *string             `json:"selfLink,omitempty"`
	SourceItemID  *string             `json:"sourceItemId,omitempty"`
	SpeakableText *string             `json:"speakableText,omitempty"`
	SpeakableType *string             `json:"speakableType,omitempty"`
	Text          *string             `json:"text,omitempty"`
	Title         *string             `json:"title,omitempty"`
	Updated       *time.Time          `json:"updated,omitempty"`
}
