package shared

import (
	"time"
)

type SubscriptionSnippet struct {
	ChannelID    *string           `json:"channelId"`
	ChannelTitle *string           `json:"channelTitle"`
	Description  *string           `json:"description"`
	PublishedAt  *time.Time        `json:"publishedAt"`
	ResourceID   *ResourceID       `json:"resourceId"`
	Thumbnails   *ThumbnailDetails `json:"thumbnails"`
	Title        *string           `json:"title"`
}
