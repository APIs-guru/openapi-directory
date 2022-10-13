package shared

type DynamicGroupMetadata struct {
	Queries []DynamicGroupQuery `json:"queries"`
	Status  *DynamicGroupStatus `json:"status"`
}
