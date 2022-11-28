package shared

import (
	"time"
)

// ReadyRequestDto
// Class ReadyRequest.
type ReadyRequestDto struct {
	IsPlaying      *bool      `json:"IsPlaying,omitempty"`
	PlaylistItemID *string    `json:"PlaylistItemId,omitempty"`
	PositionTicks  *int64     `json:"PositionTicks,omitempty"`
	When           *time.Time `json:"When,omitempty"`
}
