package shared



type OrderPaymentMethod struct {
    BillingAddress *OrderAddress `json:"billingAddress,omitempty"`
    ExpirationMonth *int32 `json:"expirationMonth,omitempty"`
    ExpirationYear *int32 `json:"expirationYear,omitempty"`
    LastFourDigits *string `json:"lastFourDigits,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

