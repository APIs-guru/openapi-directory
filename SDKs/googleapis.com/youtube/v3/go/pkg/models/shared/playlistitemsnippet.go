package shared

import (
	"time"
)

// PlaylistItemSnippet
// Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
type PlaylistItemSnippet struct {
	ChannelID              *string           `json:"channelId,omitempty"`
	ChannelTitle           *string           `json:"channelTitle,omitempty"`
	Description            *string           `json:"description,omitempty"`
	PlaylistID             *string           `json:"playlistId,omitempty"`
	Position               *int64            `json:"position,omitempty"`
	PublishedAt            *time.Time        `json:"publishedAt,omitempty"`
	ResourceID             *ResourceID       `json:"resourceId,omitempty"`
	Thumbnails             *ThumbnailDetails `json:"thumbnails,omitempty"`
	Title                  *string           `json:"title,omitempty"`
	VideoOwnerChannelID    *string           `json:"videoOwnerChannelId,omitempty"`
	VideoOwnerChannelTitle *string           `json:"videoOwnerChannelTitle,omitempty"`
}
