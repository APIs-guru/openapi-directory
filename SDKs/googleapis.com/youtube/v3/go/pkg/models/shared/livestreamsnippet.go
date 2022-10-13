package shared

import (
	"time"
)

type LiveStreamSnippet struct {
	ChannelID       *string    `json:"channelId"`
	Description     *string    `json:"description"`
	IsDefaultStream *bool      `json:"isDefaultStream"`
	PublishedAt     *time.Time `json:"publishedAt"`
	Title           *string    `json:"title"`
}
