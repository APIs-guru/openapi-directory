package shared

type GalleryReference struct {
	Host       *string `json:"host,omitempty"`
	IsModified *bool   `json:"isModified,omitempty"`
	Owner      *string `json:"owner,omitempty"`
	Repository *string `json:"repository,omitempty"`
	Signature  *string `json:"signature,omitempty"`
	Version    *string `json:"version,omitempty"`
}
