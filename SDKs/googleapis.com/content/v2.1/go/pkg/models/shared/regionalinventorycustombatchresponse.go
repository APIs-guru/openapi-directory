package shared

type RegionalinventoryCustomBatchResponse struct {
	Entries []RegionalinventoryCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                     `json:"kind,omitempty"`
}
