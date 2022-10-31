package shared

type PaymentInitiationStatusResponse200JSON struct {
	FundsAvailable    *bool                 `json:"fundsAvailable,omitempty"`
	PsuMessage        *string               `json:"psuMessage,omitempty"`
	TransactionStatus TransactionStatusEnum `json:"transactionStatus"`
}
