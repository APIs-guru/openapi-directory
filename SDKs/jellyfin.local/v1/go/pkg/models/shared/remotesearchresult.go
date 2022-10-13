package shared

import (
	"time"
)

type RemoteSearchResult struct {
	AlbumArtist        *RemoteSearchResult  `json:"AlbumArtist"`
	Artists            []RemoteSearchResult `json:"Artists"`
	ImageURL           *string              `json:"ImageUrl"`
	IndexNumber        *int32               `json:"IndexNumber"`
	IndexNumberEnd     *int32               `json:"IndexNumberEnd"`
	Name               *string              `json:"Name"`
	Overview           *string              `json:"Overview"`
	ParentIndexNumber  *int32               `json:"ParentIndexNumber"`
	PremiereDate       *time.Time           `json:"PremiereDate"`
	ProductionYear     *int32               `json:"ProductionYear"`
	ProviderIds        map[string]string    `json:"ProviderIds"`
	SearchProviderName *string              `json:"SearchProviderName"`
}
