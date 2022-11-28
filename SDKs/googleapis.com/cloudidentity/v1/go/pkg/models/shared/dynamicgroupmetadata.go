package shared

// DynamicGroupMetadata
// Dynamic group metadata like queries and status.
type DynamicGroupMetadata struct {
	Queries []DynamicGroupQuery `json:"queries,omitempty"`
	Status  *DynamicGroupStatus `json:"status,omitempty"`
}
