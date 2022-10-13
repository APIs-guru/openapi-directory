package shared

import (
	"time"
)

type LiveBroadcastSnippet struct {
	ActualEndTime      *time.Time        `json:"actualEndTime"`
	ActualStartTime    *time.Time        `json:"actualStartTime"`
	ChannelID          *string           `json:"channelId"`
	Description        *string           `json:"description"`
	IsDefaultBroadcast *bool             `json:"isDefaultBroadcast"`
	LiveChatID         *string           `json:"liveChatId"`
	PublishedAt        *time.Time        `json:"publishedAt"`
	ScheduledEndTime   *time.Time        `json:"scheduledEndTime"`
	ScheduledStartTime *time.Time        `json:"scheduledStartTime"`
	Thumbnails         *ThumbnailDetails `json:"thumbnails"`
	Title              *string           `json:"title"`
}
