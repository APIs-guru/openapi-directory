package shared

import (
	"time"
)

type RemoteSubtitleInfo struct {
	Author                     *string    `json:"Author"`
	Comment                    *string    `json:"Comment"`
	CommunityRating            *float32   `json:"CommunityRating"`
	DateCreated                *time.Time `json:"DateCreated"`
	DownloadCount              *int32     `json:"DownloadCount"`
	Format                     *string    `json:"Format"`
	ID                         *string    `json:"Id"`
	IsHashMatch                *bool      `json:"IsHashMatch"`
	Name                       *string    `json:"Name"`
	ProviderName               *string    `json:"ProviderName"`
	ThreeLetterIsoLanguageName *string    `json:"ThreeLetterISOLanguageName"`
}
