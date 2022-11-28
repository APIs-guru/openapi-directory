package shared

// GalleryReference
// Represents the link between a custom template and an entry on the Community Template Gallery site.
type GalleryReference struct {
	Host       *string `json:"host,omitempty"`
	IsModified *bool   `json:"isModified,omitempty"`
	Owner      *string `json:"owner,omitempty"`
	Repository *string `json:"repository,omitempty"`
	Signature  *string `json:"signature,omitempty"`
	Version    *string `json:"version,omitempty"`
}
