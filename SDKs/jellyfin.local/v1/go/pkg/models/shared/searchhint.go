package shared

import (
"time")

type SearchHint struct {
    Album *string `json:"Album,omitempty"`
    AlbumArtist *string `json:"AlbumArtist,omitempty"`
    AlbumID *string `json:"AlbumId,omitempty"`
    Artists []string `json:"Artists,omitempty"`
    BackdropImageItemID *string `json:"BackdropImageItemId,omitempty"`
    BackdropImageTag *string `json:"BackdropImageTag,omitempty"`
    ChannelID *string `json:"ChannelId,omitempty"`
    ChannelName *string `json:"ChannelName,omitempty"`
    EndDate *time.Time `json:"EndDate,omitempty"`
    EpisodeCount *int32 `json:"EpisodeCount,omitempty"`
    ID *string `json:"Id,omitempty"`
    IndexNumber *int32 `json:"IndexNumber,omitempty"`
    IsFolder *bool `json:"IsFolder,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    MatchedTerm *string `json:"MatchedTerm,omitempty"`
    MediaType *string `json:"MediaType,omitempty"`
    Name *string `json:"Name,omitempty"`
    ParentIndexNumber *int32 `json:"ParentIndexNumber,omitempty"`
    PrimaryImageAspectRatio *float64 `json:"PrimaryImageAspectRatio,omitempty"`
    PrimaryImageTag *string `json:"PrimaryImageTag,omitempty"`
    ProductionYear *int32 `json:"ProductionYear,omitempty"`
    RunTimeTicks *int64 `json:"RunTimeTicks,omitempty"`
    Series *string `json:"Series,omitempty"`
    SongCount *int32 `json:"SongCount,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    Status *string `json:"Status,omitempty"`
    ThumbImageItemID *string `json:"ThumbImageItemId,omitempty"`
    ThumbImageTag *string `json:"ThumbImageTag,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

