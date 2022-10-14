package shared

type TypesListResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Types         []Type  `json:"types,omitempty"`
}
