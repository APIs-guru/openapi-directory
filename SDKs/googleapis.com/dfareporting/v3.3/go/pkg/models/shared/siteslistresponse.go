package shared

type SitesListResponse struct {
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Sites         []Site  `json:"sites,omitempty"`
}
