package shared

type LocalinventoryCustomBatchResponse struct {
	Entries []LocalinventoryCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                  `json:"kind"`
}
