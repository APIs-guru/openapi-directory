package shared

import (
	"time"
)

type GetProgramsDto struct {
	ChannelIds             []string         `json:"ChannelIds,omitempty"`
	EnableImageTypes       []ImageTypeEnum  `json:"EnableImageTypes,omitempty"`
	EnableImages           *bool            `json:"EnableImages,omitempty"`
	EnableTotalRecordCount *bool            `json:"EnableTotalRecordCount,omitempty"`
	EnableUserData         *bool            `json:"EnableUserData,omitempty"`
	Fields                 []ItemFieldsEnum `json:"Fields,omitempty"`
	GenreIds               []string         `json:"GenreIds,omitempty"`
	Genres                 []string         `json:"Genres,omitempty"`
	HasAired               *bool            `json:"HasAired,omitempty"`
	ImageTypeLimit         *int32           `json:"ImageTypeLimit,omitempty"`
	IsAiring               *bool            `json:"IsAiring,omitempty"`
	IsKids                 *bool            `json:"IsKids,omitempty"`
	IsMovie                *bool            `json:"IsMovie,omitempty"`
	IsNews                 *bool            `json:"IsNews,omitempty"`
	IsSeries               *bool            `json:"IsSeries,omitempty"`
	IsSports               *bool            `json:"IsSports,omitempty"`
	LibrarySeriesID        *string          `json:"LibrarySeriesId,omitempty"`
	Limit                  *int32           `json:"Limit,omitempty"`
	MaxEndDate             *time.Time       `json:"MaxEndDate,omitempty"`
	MaxStartDate           *time.Time       `json:"MaxStartDate,omitempty"`
	MinEndDate             *time.Time       `json:"MinEndDate,omitempty"`
	MinStartDate           *time.Time       `json:"MinStartDate,omitempty"`
	SeriesTimerID          *string          `json:"SeriesTimerId,omitempty"`
	SortBy                 *string          `json:"SortBy,omitempty"`
	SortOrder              *string          `json:"SortOrder,omitempty"`
	StartIndex             *int32           `json:"StartIndex,omitempty"`
	UserID                 *string          `json:"UserId,omitempty"`
}
