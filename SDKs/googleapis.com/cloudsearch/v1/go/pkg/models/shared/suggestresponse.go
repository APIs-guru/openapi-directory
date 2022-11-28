package shared

// SuggestResponse
// Response of the suggest API.
type SuggestResponse struct {
	SuggestResults []SuggestResult `json:"suggestResults,omitempty"`
}
