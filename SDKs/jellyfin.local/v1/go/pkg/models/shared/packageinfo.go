package shared

type PackageInfo struct {
	Category    *string       `json:"category,omitempty"`
	Description *string       `json:"description,omitempty"`
	GUID        *string       `json:"guid,omitempty"`
	ImageURL    *string       `json:"imageUrl,omitempty"`
	Name        *string       `json:"name,omitempty"`
	Overview    *string       `json:"overview,omitempty"`
	Owner       *string       `json:"owner,omitempty"`
	Versions    []VersionInfo `json:"versions,omitempty"`
}
