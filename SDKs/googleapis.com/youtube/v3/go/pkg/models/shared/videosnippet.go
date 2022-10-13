package shared

import (
	"time"
)

type VideoSnippetLiveBroadcastContentEnum string

const (
	VideoSnippetLiveBroadcastContentEnumNone      VideoSnippetLiveBroadcastContentEnum = "none"
	VideoSnippetLiveBroadcastContentEnumUpcoming  VideoSnippetLiveBroadcastContentEnum = "upcoming"
	VideoSnippetLiveBroadcastContentEnumLive      VideoSnippetLiveBroadcastContentEnum = "live"
	VideoSnippetLiveBroadcastContentEnumCompleted VideoSnippetLiveBroadcastContentEnum = "completed"
)

type VideoSnippet struct {
	CategoryID           *string                               `json:"categoryId"`
	ChannelID            *string                               `json:"channelId"`
	ChannelTitle         *string                               `json:"channelTitle"`
	DefaultAudioLanguage *string                               `json:"defaultAudioLanguage"`
	DefaultLanguage      *string                               `json:"defaultLanguage"`
	Description          *string                               `json:"description"`
	LiveBroadcastContent *VideoSnippetLiveBroadcastContentEnum `json:"liveBroadcastContent"`
	Localized            *VideoLocalization                    `json:"localized"`
	PublishedAt          *time.Time                            `json:"publishedAt"`
	Tags                 []string                              `json:"tags"`
	Thumbnails           *ThumbnailDetails                     `json:"thumbnails"`
	Title                *string                               `json:"title"`
}
