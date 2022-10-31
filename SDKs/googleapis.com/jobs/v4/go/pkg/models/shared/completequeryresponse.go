package shared



type CompleteQueryResponse struct {
    CompletionResults []CompletionResult `json:"completionResults,omitempty"`
    Metadata *ResponseMetadata `json:"metadata,omitempty"`
    
}

