package shared

type AccounttaxCustomBatchResponse struct {
	Entries []AccounttaxCustomBatchResponseEntry `json:"entries"`
	Kind    *string                              `json:"kind"`
}
