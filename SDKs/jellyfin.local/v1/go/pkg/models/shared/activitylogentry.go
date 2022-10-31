package shared

import (
"time")

type ActivityLogEntry struct {
    Date *time.Time `json:"Date,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    Name *string `json:"Name,omitempty"`
    Overview *string `json:"Overview,omitempty"`
    Severity *LogLevelEnum `json:"Severity,omitempty"`
    ShortOverview *string `json:"ShortOverview,omitempty"`
    Type *string `json:"Type,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    UserPrimaryImageTag *string `json:"UserPrimaryImageTag,omitempty"`
    
}

