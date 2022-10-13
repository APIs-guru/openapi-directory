package shared

import (
	"time"
)

type UserItemDataDto struct {
	IsFavorite            *bool      `json:"IsFavorite"`
	ItemID                *string    `json:"ItemId"`
	Key                   *string    `json:"Key"`
	LastPlayedDate        *time.Time `json:"LastPlayedDate"`
	Likes                 *bool      `json:"Likes"`
	PlayCount             *int32     `json:"PlayCount"`
	PlaybackPositionTicks *int64     `json:"PlaybackPositionTicks"`
	Played                *bool      `json:"Played"`
	PlayedPercentage      *float64   `json:"PlayedPercentage"`
	Rating                *float64   `json:"Rating"`
	UnplayedItemCount     *int32     `json:"UnplayedItemCount"`
}
