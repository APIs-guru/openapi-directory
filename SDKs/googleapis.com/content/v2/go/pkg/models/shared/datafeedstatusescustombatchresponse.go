package shared

type DatafeedstatusesCustomBatchResponse struct {
	Entries []DatafeedstatusesCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                    `json:"kind"`
}
