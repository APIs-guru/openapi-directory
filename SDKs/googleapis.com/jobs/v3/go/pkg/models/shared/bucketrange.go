package shared

// BucketRange
// Represents starting and ending value of a range in double.
type BucketRange struct {
	From *float64 `json:"from,omitempty"`
	To   *float64 `json:"to,omitempty"`
}
