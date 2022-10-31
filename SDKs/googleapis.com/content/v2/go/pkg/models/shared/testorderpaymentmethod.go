package shared



type TestOrderPaymentMethod struct {
    ExpirationMonth *int32 `json:"expirationMonth,omitempty"`
    ExpirationYear *int32 `json:"expirationYear,omitempty"`
    LastFourDigits *string `json:"lastFourDigits,omitempty"`
    PredefinedBillingAddress *string `json:"predefinedBillingAddress,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

