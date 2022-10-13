package shared

type PackageInfo struct {
	Category    *string       `json:"category"`
	Description *string       `json:"description"`
	GUID        *string       `json:"guid"`
	ImageURL    *string       `json:"imageUrl"`
	Name        *string       `json:"name"`
	Overview    *string       `json:"overview"`
	Owner       *string       `json:"owner"`
	Versions    []VersionInfo `json:"versions"`
}
