package shared

type ListCssesResponse struct {
	Csses         []CSS   `json:"csses"`
	NextPageToken *string `json:"nextPageToken"`
}
