package shared

import (
"time")

type PlaylistItemSnippet struct {
    ChannelID *string `json:"channelId,omitempty"`
    ChannelTitle *string `json:"channelTitle,omitempty"`
    Description *string `json:"description,omitempty"`
    PlaylistID *string `json:"playlistId,omitempty"`
    Position *int64 `json:"position,omitempty"`
    PublishedAt *time.Time `json:"publishedAt,omitempty"`
    ResourceID *ResourceID `json:"resourceId,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    VideoOwnerChannelID *string `json:"videoOwnerChannelId,omitempty"`
    VideoOwnerChannelTitle *string `json:"videoOwnerChannelTitle,omitempty"`
    
}

