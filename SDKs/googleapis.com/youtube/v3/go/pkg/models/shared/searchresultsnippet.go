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

type SearchResultSnippet struct {
	ChannelID            *string                                      `json:"channelId"`
	ChannelTitle         *string                                      `json:"channelTitle"`
	Description          *string                                      `json:"description"`
	LiveBroadcastContent *SearchResultSnippetLiveBroadcastContentEnum `json:"liveBroadcastContent"`
	PublishedAt          *time.Time                                   `json:"publishedAt"`
	Thumbnails           *ThumbnailDetails                            `json:"thumbnails"`
	Title                *string                                      `json:"title"`
}
