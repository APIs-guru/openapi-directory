package shared

// SitesListResponse
// List of sites with access level information.
type SitesListResponse struct {
	SiteEntry []WmxSite `json:"siteEntry,omitempty"`
}
