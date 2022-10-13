package shared

type RepositoryInfo struct {
	Enabled *bool   `json:"Enabled"`
	Name    *string `json:"Name"`
	URL     *string `json:"Url"`
}
