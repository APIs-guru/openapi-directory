package shared

import (
"time")

type SeriesTimerInfoDto struct {
    ChannelID *string `json:"ChannelId,omitempty"`
    ChannelName *string `json:"ChannelName,omitempty"`
    ChannelPrimaryImageTag *string `json:"ChannelPrimaryImageTag,omitempty"`
    DayPattern *DayPatternEnum `json:"DayPattern,omitempty"`
    Days []DayOfWeekEnum `json:"Days,omitempty"`
    EndDate *time.Time `json:"EndDate,omitempty"`
    ExternalChannelID *string `json:"ExternalChannelId,omitempty"`
    ExternalID *string `json:"ExternalId,omitempty"`
    ExternalProgramID *string `json:"ExternalProgramId,omitempty"`
    ID *string `json:"Id,omitempty"`
    ImageTags map[string]string `json:"ImageTags,omitempty"`
    IsPostPaddingRequired *bool `json:"IsPostPaddingRequired,omitempty"`
    IsPrePaddingRequired *bool `json:"IsPrePaddingRequired,omitempty"`
    KeepUntil *KeepUntilEnum `json:"KeepUntil,omitempty"`
    KeepUpTo *int32 `json:"KeepUpTo,omitempty"`
    Name *string `json:"Name,omitempty"`
    Overview *string `json:"Overview,omitempty"`
    ParentBackdropImageTags []string `json:"ParentBackdropImageTags,omitempty"`
    ParentBackdropItemID *string `json:"ParentBackdropItemId,omitempty"`
    ParentPrimaryImageItemID *string `json:"ParentPrimaryImageItemId,omitempty"`
    ParentPrimaryImageTag *string `json:"ParentPrimaryImageTag,omitempty"`
    ParentThumbImageTag *string `json:"ParentThumbImageTag,omitempty"`
    ParentThumbItemID *string `json:"ParentThumbItemId,omitempty"`
    PostPaddingSeconds *int32 `json:"PostPaddingSeconds,omitempty"`
    PrePaddingSeconds *int32 `json:"PrePaddingSeconds,omitempty"`
    Priority *int32 `json:"Priority,omitempty"`
    ProgramID *string `json:"ProgramId,omitempty"`
    RecordAnyChannel *bool `json:"RecordAnyChannel,omitempty"`
    RecordAnyTime *bool `json:"RecordAnyTime,omitempty"`
    RecordNewOnly *bool `json:"RecordNewOnly,omitempty"`
    ServerID *string `json:"ServerId,omitempty"`
    ServiceName *string `json:"ServiceName,omitempty"`
    SkipEpisodesInLibrary *bool `json:"SkipEpisodesInLibrary,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

