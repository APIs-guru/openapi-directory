package shared

type Histogram struct {
	BucketCounts      []string `json:"bucketCounts,omitempty"`
	FirstBucketOffset *int32   `json:"firstBucketOffset,omitempty"`
}
