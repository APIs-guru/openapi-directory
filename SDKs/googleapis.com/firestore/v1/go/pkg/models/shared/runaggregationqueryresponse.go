package shared

type RunAggregationQueryResponse struct {
	ReadTime    *string            `json:"readTime,omitempty"`
	Result      *AggregationResult `json:"result,omitempty"`
	Transaction *string            `json:"transaction,omitempty"`
}
