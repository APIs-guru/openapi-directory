package shared

type CompleteQueryResponse struct {
	CompletionResults []CompletionResult `json:"completionResults"`
	Metadata          *ResponseMetadata  `json:"metadata"`
}
