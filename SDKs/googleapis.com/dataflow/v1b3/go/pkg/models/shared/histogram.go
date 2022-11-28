package shared

// Histogram
// Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.
type Histogram struct {
	BucketCounts      []string `json:"bucketCounts,omitempty"`
	FirstBucketOffset *int32   `json:"firstBucketOffset,omitempty"`
}
