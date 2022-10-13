package shared

type AccountstatusesCustomBatchResponse struct {
	Entries []AccountstatusesCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                   `json:"kind"`
}
