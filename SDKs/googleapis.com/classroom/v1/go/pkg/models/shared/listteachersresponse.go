package shared

type ListTeachersResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Teachers      []Teacher `json:"teachers"`
}
