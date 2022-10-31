package shared

import (
	"time"
)

type SubscriptionSnippet struct {
	ChannelID    *string           `json:"channelId,omitempty"`
	ChannelTitle *string           `json:"channelTitle,omitempty"`
	Description  *string           `json:"description,omitempty"`
	PublishedAt  *time.Time        `json:"publishedAt,omitempty"`
	ResourceID   *ResourceID       `json:"resourceId,omitempty"`
	Thumbnails   *ThumbnailDetails `json:"thumbnails,omitempty"`
	Title        *string           `json:"title,omitempty"`
}
