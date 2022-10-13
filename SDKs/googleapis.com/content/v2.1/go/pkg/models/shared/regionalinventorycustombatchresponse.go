package shared

type RegionalinventoryCustomBatchResponse struct {
	Entries []RegionalinventoryCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                     `json:"kind"`
}
