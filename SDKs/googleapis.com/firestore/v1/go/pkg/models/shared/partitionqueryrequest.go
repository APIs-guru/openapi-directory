package shared

type PartitionQueryRequest struct {
	PageSize        *int32           `json:"pageSize"`
	PageToken       *string          `json:"pageToken"`
	PartitionCount  *string          `json:"partitionCount"`
	ReadTime        *string          `json:"readTime"`
	StructuredQuery *StructuredQuery `json:"structuredQuery"`
}
