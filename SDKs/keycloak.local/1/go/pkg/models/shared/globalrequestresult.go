package shared

type GlobalRequestResult struct {
	FailedRequests  []string `json:"failedRequests,omitempty"`
	SuccessRequests []string `json:"successRequests,omitempty"`
}
