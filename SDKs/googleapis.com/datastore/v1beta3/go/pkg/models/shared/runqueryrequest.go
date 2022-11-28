package shared

// RunQueryRequest
// The request for Datastore.RunQuery.
type RunQueryRequest struct {
	GqlQuery    *GqlQuery    `json:"gqlQuery,omitempty"`
	PartitionID *PartitionID `json:"partitionId,omitempty"`
	Query       *Query       `json:"query,omitempty"`
	ReadOptions *ReadOptions `json:"readOptions,omitempty"`
}
