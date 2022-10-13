package shared

import (
	"time"
)

type ChannelSnippet struct {
	Country         *string              `json:"country"`
	CustomURL       *string              `json:"customUrl"`
	DefaultLanguage *string              `json:"defaultLanguage"`
	Description     *string              `json:"description"`
	Localized       *ChannelLocalization `json:"localized"`
	PublishedAt     *time.Time           `json:"publishedAt"`
	Thumbnails      *ThumbnailDetails    `json:"thumbnails"`
	Title           *string              `json:"title"`
}
