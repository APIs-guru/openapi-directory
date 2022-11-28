package shared

// GoogleTypeMoney
// Represents an amount of money with its currency type.
type GoogleTypeMoney struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Nanos        *int32  `json:"nanos,omitempty"`
	Units        *string `json:"units,omitempty"`
}
