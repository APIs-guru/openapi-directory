package shared

type PivotGroupSortValueBucket struct {
	Buckets     []ExtendedValue `json:"buckets"`
	ValuesIndex *int32          `json:"valuesIndex"`
}
