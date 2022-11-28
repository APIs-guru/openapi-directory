package shared

// PriceAmount
// The price represented as a number and currency.
type PriceAmount struct {
	Currency *string `json:"currency,omitempty"`
	Value    *string `json:"value,omitempty"`
}
