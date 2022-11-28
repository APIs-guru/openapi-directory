package shared

// CompleteQueryResponse
// Output only. Response of auto-complete query.
type CompleteQueryResponse struct {
	CompletionResults []CompletionResult `json:"completionResults,omitempty"`
	Metadata          *ResponseMetadata  `json:"metadata,omitempty"`
}
