package shared

type CallbackCompletionBatchRequest struct {
	CallbackID   string            `json:"callbackId"`
	OutputFields map[string]string `json:"outputFields"`
}
