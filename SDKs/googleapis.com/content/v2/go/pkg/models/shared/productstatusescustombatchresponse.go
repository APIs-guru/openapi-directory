package shared

type ProductstatusesCustomBatchResponse struct {
	Entries []ProductstatusesCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                   `json:"kind,omitempty"`
}
