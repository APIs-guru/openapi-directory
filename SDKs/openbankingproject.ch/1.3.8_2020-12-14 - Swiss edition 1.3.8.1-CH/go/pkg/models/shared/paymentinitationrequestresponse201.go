package shared

type PaymentInitationRequestResponse201 struct {
	Links                              map[string]HrefType    `json:"_links"`
	ChallengeData                      *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod                    *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	CurrencyConversionFee              *Amount                `json:"currencyConversionFee,omitempty"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount,omitempty"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount,omitempty"`
	PaymentID                          string                 `json:"paymentId"`
	PsuMessage                         *string                `json:"psuMessage,omitempty"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods,omitempty"`
	TppMessages                        []TppMessage2Xx        `json:"tppMessages,omitempty"`
	TransactionFeeIndicator            *bool                  `json:"transactionFeeIndicator,omitempty"`
	TransactionFees                    *Amount                `json:"transactionFees,omitempty"`
	TransactionStatus                  TransactionStatusEnum  `json:"transactionStatus"`
}
