package shared

import (
	"time"
)

type TimelineItem struct {
	Attachments   []Attachment        `json:"attachments"`
	BundleID      *string             `json:"bundleId"`
	CanonicalURL  *string             `json:"canonicalUrl"`
	Created       *time.Time          `json:"created"`
	Creator       *Contact            `json:"creator"`
	DisplayTime   *time.Time          `json:"displayTime"`
	Etag          *string             `json:"etag"`
	HTML          *string             `json:"html"`
	ID            *string             `json:"id"`
	InReplyTo     *string             `json:"inReplyTo"`
	IsBundleCover *bool               `json:"isBundleCover"`
	IsDeleted     *bool               `json:"isDeleted"`
	IsPinned      *bool               `json:"isPinned"`
	Kind          *string             `json:"kind"`
	Location      *Location           `json:"location"`
	MenuItems     []MenuItem          `json:"menuItems"`
	Notification  *NotificationConfig `json:"notification"`
	PinScore      *int32              `json:"pinScore"`
	Recipients    []Contact           `json:"recipients"`
	SelfLink      *string             `json:"selfLink"`
	SourceItemID  *string             `json:"sourceItemId"`
	SpeakableText *string             `json:"speakableText"`
	SpeakableType *string             `json:"speakableType"`
	Text          *string             `json:"text"`
	Title         *string             `json:"title"`
	Updated       *time.Time          `json:"updated"`
}
