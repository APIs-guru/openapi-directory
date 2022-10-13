package shared

type ApproximateSplitRequest struct {
	FractionConsumed    *float64  `json:"fractionConsumed"`
	FractionOfRemainder *float64  `json:"fractionOfRemainder"`
	Position            *Position `json:"position"`
}
