package shared

type RunQueryRequest struct {
	GqlQuery    *GqlQuery    `json:"gqlQuery"`
	PartitionID *PartitionID `json:"partitionId"`
	Query       *Query       `json:"query"`
	ReadOptions *ReadOptions `json:"readOptions"`
}
