package shared

import (
	"time"
)

type PlaylistItemContentDetails struct {
	EndAt            *string    `json:"endAt"`
	Note             *string    `json:"note"`
	StartAt          *string    `json:"startAt"`
	VideoID          *string    `json:"videoId"`
	VideoPublishedAt *time.Time `json:"videoPublishedAt"`
}
