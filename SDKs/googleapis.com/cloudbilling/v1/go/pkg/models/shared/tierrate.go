package shared

type TierRate struct {
	StartUsageAmount *float64 `json:"startUsageAmount,omitempty"`
	UnitPrice        *Money   `json:"unitPrice,omitempty"`
}
