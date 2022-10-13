package shared

type TestOrderPaymentMethod struct {
	ExpirationMonth          *int32  `json:"expirationMonth"`
	ExpirationYear           *int32  `json:"expirationYear"`
	LastFourDigits           *string `json:"lastFourDigits"`
	PredefinedBillingAddress *string `json:"predefinedBillingAddress"`
	Type                     *string `json:"type"`
}
