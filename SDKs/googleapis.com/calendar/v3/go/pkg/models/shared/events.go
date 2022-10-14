package shared

import (
	"time"
)

type Events struct {
	AccessRole       *string         `json:"accessRole,omitempty"`
	DefaultReminders []EventReminder `json:"defaultReminders,omitempty"`
	Description      *string         `json:"description,omitempty"`
	Etag             *string         `json:"etag,omitempty"`
	Items            []Event         `json:"items,omitempty"`
	Kind             *string         `json:"kind,omitempty"`
	NextPageToken    *string         `json:"nextPageToken,omitempty"`
	NextSyncToken    *string         `json:"nextSyncToken,omitempty"`
	Summary          *string         `json:"summary,omitempty"`
	TimeZone         *string         `json:"timeZone,omitempty"`
	Updated          *time.Time      `json:"updated,omitempty"`
}
