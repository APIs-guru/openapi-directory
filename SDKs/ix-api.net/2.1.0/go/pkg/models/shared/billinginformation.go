package shared

type BillingInformation struct {
	Address   Address `json:"address"`
	Name      string  `json:"name"`
	VatNumber *string `json:"vat_number"`
}
