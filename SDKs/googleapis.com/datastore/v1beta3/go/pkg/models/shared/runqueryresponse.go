package shared

type RunQueryResponse struct {
	Batch *QueryResultBatch `json:"batch"`
	Query *Query            `json:"query"`
}
