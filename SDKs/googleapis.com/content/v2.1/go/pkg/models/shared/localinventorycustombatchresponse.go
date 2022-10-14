package shared

type LocalinventoryCustomBatchResponse struct {
	Entries []LocalinventoryCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                  `json:"kind,omitempty"`
}
