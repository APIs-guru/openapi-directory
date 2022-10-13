package shared

import (
	"time"
)

type SeriesTimerInfoDto struct {
	ChannelID                *string           `json:"ChannelId"`
	ChannelName              *string           `json:"ChannelName"`
	ChannelPrimaryImageTag   *string           `json:"ChannelPrimaryImageTag"`
	DayPattern               *DayPatternEnum   `json:"DayPattern"`
	Days                     []DayOfWeekEnum   `json:"Days"`
	EndDate                  *time.Time        `json:"EndDate"`
	ExternalChannelID        *string           `json:"ExternalChannelId"`
	ExternalID               *string           `json:"ExternalId"`
	ExternalProgramID        *string           `json:"ExternalProgramId"`
	ID                       *string           `json:"Id"`
	ImageTags                map[string]string `json:"ImageTags"`
	IsPostPaddingRequired    *bool             `json:"IsPostPaddingRequired"`
	IsPrePaddingRequired     *bool             `json:"IsPrePaddingRequired"`
	KeepUntil                *KeepUntilEnum    `json:"KeepUntil"`
	KeepUpTo                 *int32            `json:"KeepUpTo"`
	Name                     *string           `json:"Name"`
	Overview                 *string           `json:"Overview"`
	ParentBackdropImageTags  []string          `json:"ParentBackdropImageTags"`
	ParentBackdropItemID     *string           `json:"ParentBackdropItemId"`
	ParentPrimaryImageItemID *string           `json:"ParentPrimaryImageItemId"`
	ParentPrimaryImageTag    *string           `json:"ParentPrimaryImageTag"`
	ParentThumbImageTag      *string           `json:"ParentThumbImageTag"`
	ParentThumbItemID        *string           `json:"ParentThumbItemId"`
	PostPaddingSeconds       *int32            `json:"PostPaddingSeconds"`
	PrePaddingSeconds        *int32            `json:"PrePaddingSeconds"`
	Priority                 *int32            `json:"Priority"`
	ProgramID                *string           `json:"ProgramId"`
	RecordAnyChannel         *bool             `json:"RecordAnyChannel"`
	RecordAnyTime            *bool             `json:"RecordAnyTime"`
	RecordNewOnly            *bool             `json:"RecordNewOnly"`
	ServerID                 *string           `json:"ServerId"`
	ServiceName              *string           `json:"ServiceName"`
	SkipEpisodesInLibrary    *bool             `json:"SkipEpisodesInLibrary"`
	StartDate                *time.Time        `json:"StartDate"`
	Type                     *string           `json:"Type"`
}
