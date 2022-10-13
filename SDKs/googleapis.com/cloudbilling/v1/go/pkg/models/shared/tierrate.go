package shared

type TierRate struct {
	StartUsageAmount *float64 `json:"startUsageAmount"`
	UnitPrice        *Money   `json:"unitPrice"`
}
