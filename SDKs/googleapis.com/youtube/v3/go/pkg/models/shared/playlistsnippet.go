package shared

import (
	"time"
)

type PlaylistSnippet struct {
	ChannelID        *string               `json:"channelId"`
	ChannelTitle     *string               `json:"channelTitle"`
	DefaultLanguage  *string               `json:"defaultLanguage"`
	Description      *string               `json:"description"`
	Localized        *PlaylistLocalization `json:"localized"`
	PublishedAt      *time.Time            `json:"publishedAt"`
	Tags             []string              `json:"tags"`
	ThumbnailVideoID *string               `json:"thumbnailVideoId"`
	Thumbnails       *ThumbnailDetails     `json:"thumbnails"`
	Title            *string               `json:"title"`
}
