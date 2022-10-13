package shared

type ListEnvironmentsResponse struct {
	Environment   []Environment `json:"environment"`
	NextPageToken *string       `json:"nextPageToken"`
}
