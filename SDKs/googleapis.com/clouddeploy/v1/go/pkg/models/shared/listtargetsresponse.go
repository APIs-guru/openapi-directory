package shared

type ListTargetsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Targets       []Target `json:"targets"`
	Unreachable   []string `json:"unreachable"`
}
