package shared

import (
	"time"
)

// LiveBroadcastSnippet
// Basic broadcast information.
type LiveBroadcastSnippet struct {
	ActualEndTime      *time.Time        `json:"actualEndTime,omitempty"`
	ActualStartTime    *time.Time        `json:"actualStartTime,omitempty"`
	ChannelID          *string           `json:"channelId,omitempty"`
	Description        *string           `json:"description,omitempty"`
	IsDefaultBroadcast *bool             `json:"isDefaultBroadcast,omitempty"`
	LiveChatID         *string           `json:"liveChatId,omitempty"`
	PublishedAt        *time.Time        `json:"publishedAt,omitempty"`
	ScheduledEndTime   *time.Time        `json:"scheduledEndTime,omitempty"`
	ScheduledStartTime *time.Time        `json:"scheduledStartTime,omitempty"`
	Thumbnails         *ThumbnailDetails `json:"thumbnails,omitempty"`
	Title              *string           `json:"title,omitempty"`
}
