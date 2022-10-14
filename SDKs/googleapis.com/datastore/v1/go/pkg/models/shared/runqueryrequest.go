package shared

type RunQueryRequest struct {
	DatabaseID  *string      `json:"databaseId,omitempty"`
	GqlQuery    *GqlQuery    `json:"gqlQuery,omitempty"`
	PartitionID *PartitionID `json:"partitionId,omitempty"`
	Query       *Query       `json:"query,omitempty"`
	ReadOptions *ReadOptions `json:"readOptions,omitempty"`
}
