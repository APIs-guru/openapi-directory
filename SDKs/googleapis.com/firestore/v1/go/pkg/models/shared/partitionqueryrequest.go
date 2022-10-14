package shared

type PartitionQueryRequest struct {
	PageSize        *int32           `json:"pageSize,omitempty"`
	PageToken       *string          `json:"pageToken,omitempty"`
	PartitionCount  *string          `json:"partitionCount,omitempty"`
	ReadTime        *string          `json:"readTime,omitempty"`
	StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
}
