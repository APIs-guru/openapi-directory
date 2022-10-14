package shared

type AccountsCustomBatchRequest struct {
	Entries []AccountsCustomBatchRequestEntry `json:"entries,omitempty"`
}
