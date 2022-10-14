package shared

import (
	"time"
)

type LiveStreamSnippet struct {
	ChannelID       *string    `json:"channelId,omitempty"`
	Description     *string    `json:"description,omitempty"`
	IsDefaultStream *bool      `json:"isDefaultStream,omitempty"`
	PublishedAt     *time.Time `json:"publishedAt,omitempty"`
	Title           *string    `json:"title,omitempty"`
}
