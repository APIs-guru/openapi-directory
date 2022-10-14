package shared

type PivotGroupSortValueBucket struct {
	Buckets     []ExtendedValue `json:"buckets,omitempty"`
	ValuesIndex *int32          `json:"valuesIndex,omitempty"`
}
