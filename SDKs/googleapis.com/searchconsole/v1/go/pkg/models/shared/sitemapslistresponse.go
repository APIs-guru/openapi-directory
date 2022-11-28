package shared

// SitemapsListResponse
// List of sitemaps.
type SitemapsListResponse struct {
	Sitemap []WmxSitemap `json:"sitemap,omitempty"`
}
