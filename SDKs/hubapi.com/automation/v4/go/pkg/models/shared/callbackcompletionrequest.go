package shared

// CallbackCompletionRequest
// Any information to send back to Workflows when completing an action callback.
type CallbackCompletionRequest struct {
	OutputFields map[string]string `json:"outputFields"`
}
