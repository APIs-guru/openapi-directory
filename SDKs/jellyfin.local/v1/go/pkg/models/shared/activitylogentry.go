package shared

import (
	"time"
)

type ActivityLogEntry struct {
	Date                *time.Time    `json:"Date"`
	ID                  *int64        `json:"Id"`
	ItemID              *string       `json:"ItemId"`
	Name                *string       `json:"Name"`
	Overview            *string       `json:"Overview"`
	Severity            *LogLevelEnum `json:"Severity"`
	ShortOverview       *string       `json:"ShortOverview"`
	Type                *string       `json:"Type"`
	UserID              *string       `json:"UserId"`
	UserPrimaryImageTag *string       `json:"UserPrimaryImageTag"`
}
