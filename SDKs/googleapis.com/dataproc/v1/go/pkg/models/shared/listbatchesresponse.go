package shared

type ListBatchesResponse struct {
	Batches       []Batch `json:"batches"`
	NextPageToken *string `json:"nextPageToken"`
}
