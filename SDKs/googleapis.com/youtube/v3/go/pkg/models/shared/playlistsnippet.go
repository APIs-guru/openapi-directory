package shared

import (
"time")

type PlaylistSnippet struct {
    ChannelID *string `json:"channelId,omitempty"`
    ChannelTitle *string `json:"channelTitle,omitempty"`
    DefaultLanguage *string `json:"defaultLanguage,omitempty"`
    Description *string `json:"description,omitempty"`
    Localized *PlaylistLocalization `json:"localized,omitempty"`
    PublishedAt *time.Time `json:"publishedAt,omitempty"`
    Tags []string `json:"tags,omitempty"`
    ThumbnailVideoID *string `json:"thumbnailVideoId,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

