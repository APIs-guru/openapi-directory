package shared

type ListEnvironmentsResponse struct {
	Environment   []Environment `json:"environment,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
