package shared

type EvaluateUserConsentsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Results       []Result `json:"results"`
}
