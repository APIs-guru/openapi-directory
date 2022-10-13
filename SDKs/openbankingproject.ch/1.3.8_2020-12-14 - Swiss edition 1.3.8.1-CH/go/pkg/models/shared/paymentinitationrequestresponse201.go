package shared

type PaymentInitationRequestResponse201 struct {
	Links                              map[string]HrefType    `json:"_links"`
	ChallengeData                      *ChallengeData         `json:"challengeData"`
	ChosenScaMethod                    *ChosenScaMethod       `json:"chosenScaMethod"`
	CurrencyConversionFee              *Amount                `json:"currencyConversionFee"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount"`
	PaymentID                          string                 `json:"paymentId"`
	PsuMessage                         *string                `json:"psuMessage"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods"`
	TppMessages                        []TppMessage2Xx        `json:"tppMessages"`
	TransactionFeeIndicator            *bool                  `json:"transactionFeeIndicator"`
	TransactionFees                    *Amount                `json:"transactionFees"`
	TransactionStatus                  TransactionStatusEnum  `json:"transactionStatus"`
}
