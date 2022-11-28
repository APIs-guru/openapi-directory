package shared

// PaymentInitiationStatusResponse200JSON
// Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
type PaymentInitiationStatusResponse200JSON struct {
	FundsAvailable    *bool                 `json:"fundsAvailable,omitempty"`
	PsuMessage        *string               `json:"psuMessage,omitempty"`
	TransactionStatus TransactionStatusEnum `json:"transactionStatus"`
}
