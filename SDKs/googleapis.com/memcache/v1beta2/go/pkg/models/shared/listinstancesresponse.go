package shared

type ListInstancesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Resources     []Instance `json:"resources"`
	Unreachable   []string   `json:"unreachable"`
}
