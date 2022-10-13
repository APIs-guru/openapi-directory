package shared

type SelectPsuAuthenticationMethodResponse struct {
	Links                              map[string]HrefType `json:"_links"`
	ChallengeData                      *ChallengeData      `json:"challengeData"`
	ChosenScaMethod                    *ChosenScaMethod    `json:"chosenScaMethod"`
	CurrencyConversionFees             *Amount             `json:"currencyConversionFees"`
	EstimatedInterbankSettlementAmount *Amount             `json:"estimatedInterbankSettlementAmount"`
	EstimatedTotalAmount               *Amount             `json:"estimatedTotalAmount"`
	PsuMessage                         *string             `json:"psuMessage"`
	ScaStatus                          ScaStatusEnum       `json:"scaStatus"`
	TransactionFees                    *Amount             `json:"transactionFees"`
}
