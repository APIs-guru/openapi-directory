package shared

type ListContainersResponse struct {
	Container     []Container `json:"container"`
	NextPageToken *string     `json:"nextPageToken"`
}
