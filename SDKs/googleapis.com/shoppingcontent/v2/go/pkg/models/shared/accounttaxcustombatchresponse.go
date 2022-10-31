package shared

type AccounttaxCustomBatchResponse struct {
	Entries []AccounttaxCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                              `json:"kind,omitempty"`
}
