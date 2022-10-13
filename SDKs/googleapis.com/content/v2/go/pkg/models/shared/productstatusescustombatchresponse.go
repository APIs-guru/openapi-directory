package shared

type ProductstatusesCustomBatchResponse struct {
	Entries []ProductstatusesCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                   `json:"kind"`
}
