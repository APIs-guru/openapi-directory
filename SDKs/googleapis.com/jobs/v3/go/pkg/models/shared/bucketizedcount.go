package shared

type BucketizedCount struct {
	Count *int32       `json:"count,omitempty"`
	Range *BucketRange `json:"range,omitempty"`
}
