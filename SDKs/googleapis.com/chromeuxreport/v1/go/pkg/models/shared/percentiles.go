package shared

// Percentiles
// Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
type Percentiles struct {
	P75 *interface{} `json:"p75,omitempty"`
}
