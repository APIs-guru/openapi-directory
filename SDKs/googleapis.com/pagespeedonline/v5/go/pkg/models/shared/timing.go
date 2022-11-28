package shared

// Timing
// Message containing the performance timing data for the Lighthouse run.
type Timing struct {
	Total *float64 `json:"total,omitempty"`
}
