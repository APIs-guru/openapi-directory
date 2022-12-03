package shared

// QuotePriceV1
// These prices describe the costs associated with a quote.
type QuotePriceV1 struct {
	PremiumBeforeTaxesAndFees *float64 `json:"premium_before_taxes_and_fees,omitempty"`
}
