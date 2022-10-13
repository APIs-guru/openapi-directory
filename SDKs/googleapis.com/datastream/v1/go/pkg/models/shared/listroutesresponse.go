package shared

type ListRoutesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Routes        []Route  `json:"routes"`
	Unreachable   []string `json:"unreachable"`
}
