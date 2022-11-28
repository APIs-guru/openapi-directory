package shared

// ListAnswersResponse
// Response message for QuestionsAndAnswers.ListAnswers
type ListAnswersResponse struct {
	Answers       []Answer `json:"answers,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
