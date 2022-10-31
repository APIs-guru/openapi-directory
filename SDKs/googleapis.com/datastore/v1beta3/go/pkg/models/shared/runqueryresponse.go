package shared



type RunQueryResponse struct {
    Batch *QueryResultBatch `json:"batch,omitempty"`
    Query *Query `json:"query,omitempty"`
    
}

