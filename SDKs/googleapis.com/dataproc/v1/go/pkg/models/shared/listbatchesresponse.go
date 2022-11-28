package shared

// ListBatchesResponse
// A list of batch workloads.
type ListBatchesResponse struct {
	Batches       []Batch `json:"batches,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
