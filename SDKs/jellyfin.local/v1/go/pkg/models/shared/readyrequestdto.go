package shared

import (
	"time"
)

type ReadyRequestDto struct {
	IsPlaying      *bool      `json:"IsPlaying"`
	PlaylistItemID *string    `json:"PlaylistItemId"`
	PositionTicks  *int64     `json:"PositionTicks"`
	When           *time.Time `json:"When"`
}
