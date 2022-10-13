package shared

type PaymentInitiationStatusResponse200JSON struct {
	FundsAvailable    *bool                 `json:"fundsAvailable"`
	PsuMessage        *string               `json:"psuMessage"`
	TransactionStatus TransactionStatusEnum `json:"transactionStatus"`
}
