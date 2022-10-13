package shared

type ListSpokesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Spokes        []Spoke  `json:"spokes"`
	Unreachable   []string `json:"unreachable"`
}
