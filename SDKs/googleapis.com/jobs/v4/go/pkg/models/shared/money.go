package shared

// Money
// Represents an amount of money with its currency type.
type Money struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Nanos        *int32  `json:"nanos,omitempty"`
	Units        *string `json:"units,omitempty"`
}
