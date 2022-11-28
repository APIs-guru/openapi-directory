package shared

import (
	"time"
)

type SearchResultSnippetLiveBroadcastContentEnum string

const (
	SearchResultSnippetLiveBroadcastContentEnumNone      SearchResultSnippetLiveBroadcastContentEnum = "none"
	SearchResultSnippetLiveBroadcastContentEnumUpcoming  SearchResultSnippetLiveBroadcastContentEnum = "upcoming"
	SearchResultSnippetLiveBroadcastContentEnumLive      SearchResultSnippetLiveBroadcastContentEnum = "live"
	SearchResultSnippetLiveBroadcastContentEnumCompleted SearchResultSnippetLiveBroadcastContentEnum = "completed"
)

// SearchResultSnippet
// Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
type SearchResultSnippet struct {
	ChannelID            *string                                      `json:"channelId,omitempty"`
	ChannelTitle         *string                                      `json:"channelTitle,omitempty"`
	Description          *string                                      `json:"description,omitempty"`
	LiveBroadcastContent *SearchResultSnippetLiveBroadcastContentEnum `json:"liveBroadcastContent,omitempty"`
	PublishedAt          *time.Time                                   `json:"publishedAt,omitempty"`
	Thumbnails           *ThumbnailDetails                            `json:"thumbnails,omitempty"`
	Title                *string                                      `json:"title,omitempty"`
}
