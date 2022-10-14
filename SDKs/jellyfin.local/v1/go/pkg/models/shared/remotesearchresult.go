package shared

import (
	"time"
)

type RemoteSearchResult struct {
	AlbumArtist        *RemoteSearchResult  `json:"AlbumArtist,omitempty"`
	Artists            []RemoteSearchResult `json:"Artists,omitempty"`
	ImageURL           *string              `json:"ImageUrl,omitempty"`
	IndexNumber        *int32               `json:"IndexNumber,omitempty"`
	IndexNumberEnd     *int32               `json:"IndexNumberEnd,omitempty"`
	Name               *string              `json:"Name,omitempty"`
	Overview           *string              `json:"Overview,omitempty"`
	ParentIndexNumber  *int32               `json:"ParentIndexNumber,omitempty"`
	PremiereDate       *time.Time           `json:"PremiereDate,omitempty"`
	ProductionYear     *int32               `json:"ProductionYear,omitempty"`
	ProviderIds        map[string]string    `json:"ProviderIds,omitempty"`
	SearchProviderName *string              `json:"SearchProviderName,omitempty"`
}
