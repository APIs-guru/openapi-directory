package shared

// RunAggregationQueryRequest
// The request for Datastore.RunAggregationQuery.
type RunAggregationQueryRequest struct {
	AggregationQuery *AggregationQuery `json:"aggregationQuery,omitempty"`
	GqlQuery         *GqlQuery         `json:"gqlQuery,omitempty"`
	PartitionID      *PartitionID      `json:"partitionId,omitempty"`
	ReadOptions      *ReadOptions      `json:"readOptions,omitempty"`
}
