package shared

import (
	"time"
)

type TimerInfoDto struct {
	ChannelID               *string              `json:"ChannelId"`
	ChannelName             *string              `json:"ChannelName"`
	ChannelPrimaryImageTag  *string              `json:"ChannelPrimaryImageTag"`
	EndDate                 *time.Time           `json:"EndDate"`
	ExternalChannelID       *string              `json:"ExternalChannelId"`
	ExternalID              *string              `json:"ExternalId"`
	ExternalProgramID       *string              `json:"ExternalProgramId"`
	ExternalSeriesTimerID   *string              `json:"ExternalSeriesTimerId"`
	ID                      *string              `json:"Id"`
	IsPostPaddingRequired   *bool                `json:"IsPostPaddingRequired"`
	IsPrePaddingRequired    *bool                `json:"IsPrePaddingRequired"`
	KeepUntil               *KeepUntilEnum       `json:"KeepUntil"`
	Name                    *string              `json:"Name"`
	Overview                *string              `json:"Overview"`
	ParentBackdropImageTags []string             `json:"ParentBackdropImageTags"`
	ParentBackdropItemID    *string              `json:"ParentBackdropItemId"`
	PostPaddingSeconds      *int32               `json:"PostPaddingSeconds"`
	PrePaddingSeconds       *int32               `json:"PrePaddingSeconds"`
	Priority                *int32               `json:"Priority"`
	ProgramID               *string              `json:"ProgramId"`
	ProgramInfo             *BaseItemDto         `json:"ProgramInfo"`
	RunTimeTicks            *int64               `json:"RunTimeTicks"`
	SeriesTimerID           *string              `json:"SeriesTimerId"`
	ServerID                *string              `json:"ServerId"`
	ServiceName             *string              `json:"ServiceName"`
	StartDate               *time.Time           `json:"StartDate"`
	Status                  *RecordingStatusEnum `json:"Status"`
	Type                    *string              `json:"Type"`
}
