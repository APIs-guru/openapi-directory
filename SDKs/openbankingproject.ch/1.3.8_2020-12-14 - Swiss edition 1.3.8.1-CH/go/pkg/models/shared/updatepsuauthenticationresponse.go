package shared

type UpdatePsuAuthenticationResponse struct {
	Links                              map[string]HrefType    `json:"_links"`
	AuthorisationID                    *string                `json:"authorisationId"`
	ChallengeData                      *ChallengeData         `json:"challengeData"`
	ChosenScaMethod                    *ChosenScaMethod       `json:"chosenScaMethod"`
	CurrencyConversionFees             *Amount                `json:"currencyConversionFees"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount"`
	PsuMessage                         *string                `json:"psuMessage"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods"`
	ScaStatus                          ScaStatusEnum          `json:"scaStatus"`
	TransactionFees                    *Amount                `json:"transactionFees"`
}
