package shared

// ReplaceSitesResponse
// Response message for SiteService.ReplaceSites.
type ReplaceSitesResponse struct {
	Sites []Site `json:"sites,omitempty"`
}
