package shared

type PosCustomBatchResponse struct {
	Entries []PosCustomBatchResponseEntry `json:"entries"`
	Kind    *string                       `json:"kind"`
}
