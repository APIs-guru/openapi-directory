package shared

// ApproximateSplitRequest
// A suggestion by the service to the worker to dynamically split the WorkItem.
type ApproximateSplitRequest struct {
	FractionConsumed    *float64  `json:"fractionConsumed,omitempty"`
	FractionOfRemainder *float64  `json:"fractionOfRemainder,omitempty"`
	Position            *Position `json:"position,omitempty"`
}
