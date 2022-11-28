package shared

// ListSitesResponse
// Response message for SiteService.ListSites.
type ListSitesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Sites         []Site  `json:"sites,omitempty"`
}
