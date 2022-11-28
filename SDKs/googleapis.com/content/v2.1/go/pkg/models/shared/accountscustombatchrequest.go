package shared

type AccountsCustomBatchRequestInput struct {
	Entries []AccountsCustomBatchRequestEntryInput `json:"entries,omitempty"`
}
