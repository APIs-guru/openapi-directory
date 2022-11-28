package shared

// BulkEditSitesResponse
// Response message for SiteService.BulkEditSites.
type BulkEditSitesResponse struct {
	Sites []Site `json:"sites,omitempty"`
}
