package shared

// Price
// A price.
type Price struct {
	Amount   *string `json:"amount,omitempty"`
	Currency *string `json:"currency,omitempty"`
}
