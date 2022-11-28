package shared

// UpdatePsuAuthenticationResponse
// Body of the JSON response for a successful update PSU authentication request.
type UpdatePsuAuthenticationResponse struct {
	Links                              map[string]HrefType    `json:"_links,omitempty"`
	AuthorisationID                    *string                `json:"authorisationId,omitempty"`
	ChallengeData                      *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod                    *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	CurrencyConversionFees             *Amount                `json:"currencyConversionFees,omitempty"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount,omitempty"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount,omitempty"`
	PsuMessage                         *string                `json:"psuMessage,omitempty"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods,omitempty"`
	ScaStatus                          ScaStatusEnum          `json:"scaStatus"`
	TransactionFees                    *Amount                `json:"transactionFees,omitempty"`
}
