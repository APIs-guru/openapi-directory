package shared

import (
	"time"
)

type TimerInfoDtoInput struct {
	ChannelID               *string              `json:"ChannelId,omitempty"`
	ChannelName             *string              `json:"ChannelName,omitempty"`
	ChannelPrimaryImageTag  *string              `json:"ChannelPrimaryImageTag,omitempty"`
	EndDate                 *time.Time           `json:"EndDate,omitempty"`
	ExternalChannelID       *string              `json:"ExternalChannelId,omitempty"`
	ExternalID              *string              `json:"ExternalId,omitempty"`
	ExternalProgramID       *string              `json:"ExternalProgramId,omitempty"`
	ExternalSeriesTimerID   *string              `json:"ExternalSeriesTimerId,omitempty"`
	ID                      *string              `json:"Id,omitempty"`
	IsPostPaddingRequired   *bool                `json:"IsPostPaddingRequired,omitempty"`
	IsPrePaddingRequired    *bool                `json:"IsPrePaddingRequired,omitempty"`
	KeepUntil               *KeepUntilEnum       `json:"KeepUntil,omitempty"`
	Name                    *string              `json:"Name,omitempty"`
	Overview                *string              `json:"Overview,omitempty"`
	ParentBackdropImageTags []string             `json:"ParentBackdropImageTags,omitempty"`
	ParentBackdropItemID    *string              `json:"ParentBackdropItemId,omitempty"`
	PostPaddingSeconds      *int32               `json:"PostPaddingSeconds,omitempty"`
	PrePaddingSeconds       *int32               `json:"PrePaddingSeconds,omitempty"`
	Priority                *int32               `json:"Priority,omitempty"`
	ProgramID               *string              `json:"ProgramId,omitempty"`
	ProgramInfo             *BaseItemDtoInput    `json:"ProgramInfo,omitempty"`
	RunTimeTicks            *int64               `json:"RunTimeTicks,omitempty"`
	SeriesTimerID           *string              `json:"SeriesTimerId,omitempty"`
	ServerID                *string              `json:"ServerId,omitempty"`
	ServiceName             *string              `json:"ServiceName,omitempty"`
	StartDate               *time.Time           `json:"StartDate,omitempty"`
	Status                  *RecordingStatusEnum `json:"Status,omitempty"`
	Type                    *string              `json:"Type,omitempty"`
}

type TimerInfoDto struct {
	ChannelID               *string              `json:"ChannelId,omitempty"`
	ChannelName             *string              `json:"ChannelName,omitempty"`
	ChannelPrimaryImageTag  *string              `json:"ChannelPrimaryImageTag,omitempty"`
	EndDate                 *time.Time           `json:"EndDate,omitempty"`
	ExternalChannelID       *string              `json:"ExternalChannelId,omitempty"`
	ExternalID              *string              `json:"ExternalId,omitempty"`
	ExternalProgramID       *string              `json:"ExternalProgramId,omitempty"`
	ExternalSeriesTimerID   *string              `json:"ExternalSeriesTimerId,omitempty"`
	ID                      *string              `json:"Id,omitempty"`
	IsPostPaddingRequired   *bool                `json:"IsPostPaddingRequired,omitempty"`
	IsPrePaddingRequired    *bool                `json:"IsPrePaddingRequired,omitempty"`
	KeepUntil               *KeepUntilEnum       `json:"KeepUntil,omitempty"`
	Name                    *string              `json:"Name,omitempty"`
	Overview                *string              `json:"Overview,omitempty"`
	ParentBackdropImageTags []string             `json:"ParentBackdropImageTags,omitempty"`
	ParentBackdropItemID    *string              `json:"ParentBackdropItemId,omitempty"`
	PostPaddingSeconds      *int32               `json:"PostPaddingSeconds,omitempty"`
	PrePaddingSeconds       *int32               `json:"PrePaddingSeconds,omitempty"`
	Priority                *int32               `json:"Priority,omitempty"`
	ProgramID               *string              `json:"ProgramId,omitempty"`
	ProgramInfo             *BaseItemDto         `json:"ProgramInfo,omitempty"`
	RunTimeTicks            *int64               `json:"RunTimeTicks,omitempty"`
	SeriesTimerID           *string              `json:"SeriesTimerId,omitempty"`
	ServerID                *string              `json:"ServerId,omitempty"`
	ServiceName             *string              `json:"ServiceName,omitempty"`
	StartDate               *time.Time           `json:"StartDate,omitempty"`
	Status                  *RecordingStatusEnum `json:"Status,omitempty"`
	Type                    *string              `json:"Type,omitempty"`
}
