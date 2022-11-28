package shared

// CallbackCompletionBatchRequest
// Any information to send back to Workflows when completing an action callback as part of a batch request.
type CallbackCompletionBatchRequest struct {
	CallbackID   string            `json:"callbackId"`
	OutputFields map[string]string `json:"outputFields"`
}
