package shared

type ListReposResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Repos         []Repo  `json:"repos"`
}
