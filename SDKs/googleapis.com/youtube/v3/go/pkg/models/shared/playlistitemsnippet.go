package shared

import (
	"time"
)

type PlaylistItemSnippet struct {
	ChannelID              *string           `json:"channelId"`
	ChannelTitle           *string           `json:"channelTitle"`
	Description            *string           `json:"description"`
	PlaylistID             *string           `json:"playlistId"`
	Position               *int64            `json:"position"`
	PublishedAt            *time.Time        `json:"publishedAt"`
	ResourceID             *ResourceID       `json:"resourceId"`
	Thumbnails             *ThumbnailDetails `json:"thumbnails"`
	Title                  *string           `json:"title"`
	VideoOwnerChannelID    *string           `json:"videoOwnerChannelId"`
	VideoOwnerChannelTitle *string           `json:"videoOwnerChannelTitle"`
}
