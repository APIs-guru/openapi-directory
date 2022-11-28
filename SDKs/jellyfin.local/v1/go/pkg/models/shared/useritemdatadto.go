package shared

import (
	"time"
)

// UserItemDataDto
// Class UserItemDataDto.
type UserItemDataDto struct {
	IsFavorite            *bool      `json:"IsFavorite,omitempty"`
	ItemID                *string    `json:"ItemId,omitempty"`
	Key                   *string    `json:"Key,omitempty"`
	LastPlayedDate        *time.Time `json:"LastPlayedDate,omitempty"`
	Likes                 *bool      `json:"Likes,omitempty"`
	PlayCount             *int32     `json:"PlayCount,omitempty"`
	PlaybackPositionTicks *int64     `json:"PlaybackPositionTicks,omitempty"`
	Played                *bool      `json:"Played,omitempty"`
	PlayedPercentage      *float64   `json:"PlayedPercentage,omitempty"`
	Rating                *float64   `json:"Rating,omitempty"`
	UnplayedItemCount     *int32     `json:"UnplayedItemCount,omitempty"`
}
