package shared

// Trigger
// Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
type Trigger struct {
	Count   *int32   `json:"count,omitempty"`
	Percent *float64 `json:"percent,omitempty"`
}
