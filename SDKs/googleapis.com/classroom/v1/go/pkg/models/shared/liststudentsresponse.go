package shared

type ListStudentsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Students      []Student `json:"students"`
}
