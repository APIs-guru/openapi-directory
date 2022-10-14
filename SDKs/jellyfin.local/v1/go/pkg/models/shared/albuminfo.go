package shared

import (
	"time"
)

type AlbumInfo struct {
	AlbumArtists        []string          `json:"AlbumArtists,omitempty"`
	ArtistProviderIds   map[string]string `json:"ArtistProviderIds,omitempty"`
	IndexNumber         *int32            `json:"IndexNumber,omitempty"`
	IsAutomated         *bool             `json:"IsAutomated,omitempty"`
	MetadataCountryCode *string           `json:"MetadataCountryCode,omitempty"`
	MetadataLanguage    *string           `json:"MetadataLanguage,omitempty"`
	Name                *string           `json:"Name,omitempty"`
	ParentIndexNumber   *int32            `json:"ParentIndexNumber,omitempty"`
	Path                *string           `json:"Path,omitempty"`
	PremiereDate        *time.Time        `json:"PremiereDate,omitempty"`
	ProviderIds         map[string]string `json:"ProviderIds,omitempty"`
	SongInfos           []SongInfo        `json:"SongInfos,omitempty"`
	Year                *int32            `json:"Year,omitempty"`
}
