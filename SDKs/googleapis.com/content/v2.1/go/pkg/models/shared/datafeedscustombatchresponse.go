package shared

type DatafeedsCustomBatchResponse struct {
	Entries []DatafeedsCustomBatchResponseEntry `json:"entries"`
	Kind    *string                             `json:"kind"`
}
