package shared



type SigningBasket struct {
    ConsentIds []string `json:"consentIds,omitempty"`
    PaymentIds []string `json:"paymentIds,omitempty"`
    
}

