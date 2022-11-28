package shared

// PaymentInitiationCancelResponse202
// Body of the response for a successful cancel payment request.
type PaymentInitiationCancelResponse202 struct {
	Links             map[string]HrefType    `json:"_links,omitempty"`
	ChallengeData     *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod   *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	ScaMethods        []AuthenticationObject `json:"scaMethods,omitempty"`
	TransactionStatus TransactionStatusEnum  `json:"transactionStatus"`
}
