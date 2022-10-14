package shared

import (
	"time"
)

type RemoteSubtitleInfo struct {
	Author                     *string    `json:"Author,omitempty"`
	Comment                    *string    `json:"Comment,omitempty"`
	CommunityRating            *float32   `json:"CommunityRating,omitempty"`
	DateCreated                *time.Time `json:"DateCreated,omitempty"`
	DownloadCount              *int32     `json:"DownloadCount,omitempty"`
	Format                     *string    `json:"Format,omitempty"`
	ID                         *string    `json:"Id,omitempty"`
	IsHashMatch                *bool      `json:"IsHashMatch,omitempty"`
	Name                       *string    `json:"Name,omitempty"`
	ProviderName               *string    `json:"ProviderName,omitempty"`
	ThreeLetterIsoLanguageName *string    `json:"ThreeLetterISOLanguageName,omitempty"`
}
