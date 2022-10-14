package shared

type AccountstatusesCustomBatchResponse struct {
	Entries []AccountstatusesCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                   `json:"kind,omitempty"`
}
