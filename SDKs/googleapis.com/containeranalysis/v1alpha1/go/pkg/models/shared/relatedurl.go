package shared

// RelatedURL
// Metadata for any related URL information
type RelatedURL struct {
	Label *string `json:"label,omitempty"`
	URL   *string `json:"url,omitempty"`
}
