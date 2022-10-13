package shared

type ListSharesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Shares        []Share  `json:"shares"`
	Unreachable   []string `json:"unreachable"`
}
