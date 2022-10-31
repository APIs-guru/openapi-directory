package shared

type ListSpokesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Spokes        []Spoke  `json:"spokes,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
