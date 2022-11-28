package shared

// RepositoryInfo
// Class RepositoryInfo.
type RepositoryInfo struct {
	Enabled *bool   `json:"Enabled,omitempty"`
	Name    *string `json:"Name,omitempty"`
	URL     *string `json:"Url,omitempty"`
}
