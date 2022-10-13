package shared

type OrderPaymentMethod struct {
	BillingAddress  *OrderAddress `json:"billingAddress"`
	ExpirationMonth *int32        `json:"expirationMonth"`
	ExpirationYear  *int32        `json:"expirationYear"`
	LastFourDigits  *string       `json:"lastFourDigits"`
	PhoneNumber     *string       `json:"phoneNumber"`
	Type            *string       `json:"type"`
}
