package shared

// RateTier
// Pricing details for a service tier.
type RateTier struct {
	Price       *Money   `json:"price,omitempty"`
	StartAmount *float64 `json:"startAmount,omitempty"`
}
