package shared

import (
	"time"
)

type SearchHint struct {
	Album                   *string    `json:"Album"`
	AlbumArtist             *string    `json:"AlbumArtist"`
	AlbumID                 *string    `json:"AlbumId"`
	Artists                 []string   `json:"Artists"`
	BackdropImageItemID     *string    `json:"BackdropImageItemId"`
	BackdropImageTag        *string    `json:"BackdropImageTag"`
	ChannelID               *string    `json:"ChannelId"`
	ChannelName             *string    `json:"ChannelName"`
	EndDate                 *time.Time `json:"EndDate"`
	EpisodeCount            *int32     `json:"EpisodeCount"`
	ID                      *string    `json:"Id"`
	IndexNumber             *int32     `json:"IndexNumber"`
	IsFolder                *bool      `json:"IsFolder"`
	ItemID                  *string    `json:"ItemId"`
	MatchedTerm             *string    `json:"MatchedTerm"`
	MediaType               *string    `json:"MediaType"`
	Name                    *string    `json:"Name"`
	ParentIndexNumber       *int32     `json:"ParentIndexNumber"`
	PrimaryImageAspectRatio *float64   `json:"PrimaryImageAspectRatio"`
	PrimaryImageTag         *string    `json:"PrimaryImageTag"`
	ProductionYear          *int32     `json:"ProductionYear"`
	RunTimeTicks            *int64     `json:"RunTimeTicks"`
	Series                  *string    `json:"Series"`
	SongCount               *int32     `json:"SongCount"`
	StartDate               *time.Time `json:"StartDate"`
	Status                  *string    `json:"Status"`
	ThumbImageItemID        *string    `json:"ThumbImageItemId"`
	ThumbImageTag           *string    `json:"ThumbImageTag"`
	Type                    *string    `json:"Type"`
}
