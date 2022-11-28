package shared

// SelectPsuAuthenticationMethodResponse
// Body of the JSON response for a successful select PSU authentication method request.
type SelectPsuAuthenticationMethodResponse struct {
	Links                              map[string]HrefType `json:"_links,omitempty"`
	ChallengeData                      *ChallengeData      `json:"challengeData,omitempty"`
	ChosenScaMethod                    *ChosenScaMethod    `json:"chosenScaMethod,omitempty"`
	CurrencyConversionFees             *Amount             `json:"currencyConversionFees,omitempty"`
	EstimatedInterbankSettlementAmount *Amount             `json:"estimatedInterbankSettlementAmount,omitempty"`
	EstimatedTotalAmount               *Amount             `json:"estimatedTotalAmount,omitempty"`
	PsuMessage                         *string             `json:"psuMessage,omitempty"`
	ScaStatus                          ScaStatusEnum       `json:"scaStatus"`
	TransactionFees                    *Amount             `json:"transactionFees,omitempty"`
}
