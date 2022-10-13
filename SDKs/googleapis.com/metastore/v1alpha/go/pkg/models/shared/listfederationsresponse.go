package shared

type ListFederationsResponse struct {
	Federations   []Federation `json:"federations"`
	NextPageToken *string      `json:"nextPageToken"`
	Unreachable   []string     `json:"unreachable"`
}
