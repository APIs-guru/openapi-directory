package shared

import (
"time")

type ChannelSnippet struct {
    Country *string `json:"country,omitempty"`
    CustomURL *string `json:"customUrl,omitempty"`
    DefaultLanguage *string `json:"defaultLanguage,omitempty"`
    Description *string `json:"description,omitempty"`
    Localized *ChannelLocalization `json:"localized,omitempty"`
    PublishedAt *time.Time `json:"publishedAt,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

