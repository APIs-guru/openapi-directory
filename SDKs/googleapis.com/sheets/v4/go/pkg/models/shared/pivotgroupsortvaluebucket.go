package shared

// PivotGroupSortValueBucket
// Information about which values in a pivot group should be used for sorting.
type PivotGroupSortValueBucket struct {
	Buckets     []ExtendedValue `json:"buckets,omitempty"`
	ValuesIndex *int32          `json:"valuesIndex,omitempty"`
}
