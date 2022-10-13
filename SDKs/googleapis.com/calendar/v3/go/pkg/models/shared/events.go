package shared

import (
	"time"
)

type Events struct {
	AccessRole       *string         `json:"accessRole"`
	DefaultReminders []EventReminder `json:"defaultReminders"`
	Description      *string         `json:"description"`
	Etag             *string         `json:"etag"`
	Items            []Event         `json:"items"`
	Kind             *string         `json:"kind"`
	NextPageToken    *string         `json:"nextPageToken"`
	NextSyncToken    *string         `json:"nextSyncToken"`
	Summary          *string         `json:"summary"`
	TimeZone         *string         `json:"timeZone"`
	Updated          *time.Time      `json:"updated"`
}
