package shared

// WmxSitemapContent
// Information about the various content types in the sitemap.
type WmxSitemapContent struct {
	Indexed   *string `json:"indexed,omitempty"`
	Submitted *string `json:"submitted,omitempty"`
	Type      *string `json:"type,omitempty"`
}
