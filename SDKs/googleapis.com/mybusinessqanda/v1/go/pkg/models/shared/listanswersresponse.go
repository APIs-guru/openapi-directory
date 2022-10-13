package shared

type ListAnswersResponse struct {
	Answers       []Answer `json:"answers"`
	NextPageToken *string  `json:"nextPageToken"`
	TotalSize     *int32   `json:"totalSize"`
}
