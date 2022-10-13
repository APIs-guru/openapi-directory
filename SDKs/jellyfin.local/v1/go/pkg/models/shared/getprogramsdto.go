package shared

import (
	"time"
)

type GetProgramsDto struct {
	ChannelIds             []string         `json:"ChannelIds"`
	EnableImageTypes       []ImageTypeEnum  `json:"EnableImageTypes"`
	EnableImages           *bool            `json:"EnableImages"`
	EnableTotalRecordCount *bool            `json:"EnableTotalRecordCount"`
	EnableUserData         *bool            `json:"EnableUserData"`
	Fields                 []ItemFieldsEnum `json:"Fields"`
	GenreIds               []string         `json:"GenreIds"`
	Genres                 []string         `json:"Genres"`
	HasAired               *bool            `json:"HasAired"`
	ImageTypeLimit         *int32           `json:"ImageTypeLimit"`
	IsAiring               *bool            `json:"IsAiring"`
	IsKids                 *bool            `json:"IsKids"`
	IsMovie                *bool            `json:"IsMovie"`
	IsNews                 *bool            `json:"IsNews"`
	IsSeries               *bool            `json:"IsSeries"`
	IsSports               *bool            `json:"IsSports"`
	LibrarySeriesID        *string          `json:"LibrarySeriesId"`
	Limit                  *int32           `json:"Limit"`
	MaxEndDate             *time.Time       `json:"MaxEndDate"`
	MaxStartDate           *time.Time       `json:"MaxStartDate"`
	MinEndDate             *time.Time       `json:"MinEndDate"`
	MinStartDate           *time.Time       `json:"MinStartDate"`
	SeriesTimerID          *string          `json:"SeriesTimerId"`
	SortBy                 *string          `json:"SortBy"`
	SortOrder              *string          `json:"SortOrder"`
	StartIndex             *int32           `json:"StartIndex"`
	UserID                 *string          `json:"UserId"`
}
