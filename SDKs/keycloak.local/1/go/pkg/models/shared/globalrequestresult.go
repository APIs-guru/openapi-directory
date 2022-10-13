package shared

type GlobalRequestResult struct {
	FailedRequests  []string `json:"failedRequests"`
	SuccessRequests []string `json:"successRequests"`
}
