package shared

type ListEnvironmentsResponse struct {
	Environments  []Environment `json:"environments"`
	NextPageToken *string       `json:"nextPageToken"`
	Unreachable   []string      `json:"unreachable"`
}
