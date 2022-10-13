package shared

type ListMattersResponse struct {
	Matters       []Matter `json:"matters"`
	NextPageToken *string  `json:"nextPageToken"`
}
