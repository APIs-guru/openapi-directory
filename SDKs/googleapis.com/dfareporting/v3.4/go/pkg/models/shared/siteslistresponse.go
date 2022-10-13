package shared

type SitesListResponse struct {
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	Sites         []Site  `json:"sites"`
}
