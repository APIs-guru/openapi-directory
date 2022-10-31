package shared

import (
"time")

type PlaylistItemContentDetails struct {
    EndAt *string `json:"endAt,omitempty"`
    Note *string `json:"note,omitempty"`
    StartAt *string `json:"startAt,omitempty"`
    VideoID *string `json:"videoId,omitempty"`
    VideoPublishedAt *time.Time `json:"videoPublishedAt,omitempty"`
    
}

