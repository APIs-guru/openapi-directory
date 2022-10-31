package shared

import (
"time")


type SearchResultSnippetLiveBroadcastContentEnum string

const (
    SearchResultSnippetLiveBroadcastContentEnumNone SearchResultSnippetLiveBroadcastContentEnum = "none"
SearchResultSnippetLiveBroadcastContentEnumUpcoming SearchResultSnippetLiveBroadcastContentEnum = "upcoming"
SearchResultSnippetLiveBroadcastContentEnumLive SearchResultSnippetLiveBroadcastContentEnum = "live"
SearchResultSnippetLiveBroadcastContentEnumCompleted SearchResultSnippetLiveBroadcastContentEnum = "completed"
)


type SearchResultSnippet struct {
    ChannelID *string `json:"channelId,omitempty"`
    ChannelTitle *string `json:"channelTitle,omitempty"`
    Description *string `json:"description,omitempty"`
    LiveBroadcastContent *SearchResultSnippetLiveBroadcastContentEnum `json:"liveBroadcastContent,omitempty"`
    PublishedAt *time.Time `json:"publishedAt,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

