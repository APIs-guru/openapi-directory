package shared

// Bucket
// A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
type Bucket struct {
	Max        *int32   `json:"max,omitempty"`
	Min        *int32   `json:"min,omitempty"`
	Proportion *float64 `json:"proportion,omitempty"`
}
