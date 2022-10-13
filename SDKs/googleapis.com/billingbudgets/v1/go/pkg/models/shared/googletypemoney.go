package shared

type GoogleTypeMoney struct {
	CurrencyCode *string `json:"currencyCode"`
	Nanos        *int32  `json:"nanos"`
	Units        *string `json:"units"`
}
