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
	CategoryID           *string                               `json:"categoryId,omitempty"`
	ChannelID            *string                               `json:"channelId,omitempty"`
	ChannelTitle         *string                               `json:"channelTitle,omitempty"`
	DefaultAudioLanguage *string                               `json:"defaultAudioLanguage,omitempty"`
	DefaultLanguage      *string                               `json:"defaultLanguage,omitempty"`
	Description          *string                               `json:"description,omitempty"`
	LiveBroadcastContent *VideoSnippetLiveBroadcastContentEnum `json:"liveBroadcastContent,omitempty"`
	Localized            *VideoLocalization                    `json:"localized,omitempty"`
	PublishedAt          *time.Time                            `json:"publishedAt,omitempty"`
	Tags                 []string                              `json:"tags,omitempty"`
	Thumbnails           *ThumbnailDetails                     `json:"thumbnails,omitempty"`
	Title                *string                               `json:"title,omitempty"`
}
