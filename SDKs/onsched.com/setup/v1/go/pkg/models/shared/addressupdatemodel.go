package shared

type AddressUpdateModel struct {
	AddressLine1 *string `json:"addressLine1"`
	AddressLine2 *string `json:"addressLine2"`
	City         *string `json:"city"`
	Country      *string `json:"country"`
	PostalCode   *string `json:"postalCode"`
	State        *string `json:"state"`
}
