package shared

// RunQueryResponse
// The response for Datastore.RunQuery.
type RunQueryResponse struct {
	Batch *QueryResultBatch `json:"batch,omitempty"`
	Query *Query            `json:"query,omitempty"`
}
