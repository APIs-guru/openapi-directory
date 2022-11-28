package shared

// SigningBasket
// JSON Body of a establish signing basket request.
// The body shall contain at least one entry.
type SigningBasket struct {
	ConsentIds []string `json:"consentIds,omitempty"`
	PaymentIds []string `json:"paymentIds,omitempty"`
}
