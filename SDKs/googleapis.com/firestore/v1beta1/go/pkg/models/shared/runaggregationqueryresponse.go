package shared

type RunAggregationQueryResponse struct {
	ReadTime    *string            `json:"readTime"`
	Result      *AggregationResult `json:"result"`
	Transaction *string            `json:"transaction"`
}
