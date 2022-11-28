package shared

// ExplicitBuckets
// Describing buckets with arbitrary user-provided width.
type ExplicitBuckets struct {
	Bounds []float64 `json:"bounds,omitempty"`
}
