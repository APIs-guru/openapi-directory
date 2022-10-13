package shared

type AccountsCustomBatchResponse struct {
	Entries []AccountsCustomBatchResponseEntry `json:"entries"`
	Kind    *string                            `json:"kind"`
}
