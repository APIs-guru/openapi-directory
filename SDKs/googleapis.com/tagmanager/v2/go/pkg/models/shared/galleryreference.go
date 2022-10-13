package shared

type GalleryReference struct {
	Host       *string `json:"host"`
	IsModified *bool   `json:"isModified"`
	Owner      *string `json:"owner"`
	Repository *string `json:"repository"`
	Signature  *string `json:"signature"`
	Version    *string `json:"version"`
}
