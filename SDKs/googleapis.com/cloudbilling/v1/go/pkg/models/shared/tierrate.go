package shared

// TierRate
// The price rate indicating starting usage and its corresponding price.
type TierRate struct {
	StartUsageAmount *float64 `json:"startUsageAmount,omitempty"`
	UnitPrice        *Money   `json:"unitPrice,omitempty"`
}
