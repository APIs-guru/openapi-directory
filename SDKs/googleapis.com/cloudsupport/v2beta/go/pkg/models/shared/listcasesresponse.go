package shared

type ListCasesResponse struct {
	Cases         []Case  `json:"cases"`
	NextPageToken *string `json:"nextPageToken"`
}
