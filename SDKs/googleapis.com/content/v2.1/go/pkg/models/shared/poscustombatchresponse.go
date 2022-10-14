package shared

type PosCustomBatchResponse struct {
	Entries []PosCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                       `json:"kind,omitempty"`
}
