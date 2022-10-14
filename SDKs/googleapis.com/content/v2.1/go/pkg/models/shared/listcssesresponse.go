package shared

type ListCssesResponse struct {
	Csses         []CSS   `json:"csses,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
