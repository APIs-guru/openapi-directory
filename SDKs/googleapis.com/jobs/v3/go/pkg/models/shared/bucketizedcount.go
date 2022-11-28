package shared

// BucketizedCount
// Represents count of jobs within one bucket.
type BucketizedCount struct {
	Count *int32       `json:"count,omitempty"`
	Range *BucketRange `json:"range,omitempty"`
}
