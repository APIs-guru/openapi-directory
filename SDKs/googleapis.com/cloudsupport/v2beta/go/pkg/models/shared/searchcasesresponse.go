package shared

type SearchCasesResponse struct {
	Cases         []Case  `json:"cases"`
	NextPageToken *string `json:"nextPageToken"`
}
