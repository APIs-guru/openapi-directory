package shared

type TypesListResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Types         []Type  `json:"types"`
}
