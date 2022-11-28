package shared

// LinearBuckets
// Describing buckets with constant width.
type LinearBuckets struct {
	NumFiniteBuckets *int32   `json:"numFiniteBuckets,omitempty"`
	Offset           *float64 `json:"offset,omitempty"`
	Width            *float64 `json:"width,omitempty"`
}
