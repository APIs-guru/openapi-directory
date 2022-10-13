package shared

type Histogram struct {
	BucketCounts      []string `json:"bucketCounts"`
	FirstBucketOffset *int32   `json:"firstBucketOffset"`
}
