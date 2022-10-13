package shared

type PaymentInitiationCancelResponse202 struct {
	Links             map[string]HrefType    `json:"_links"`
	ChallengeData     *ChallengeData         `json:"challengeData"`
	ChosenScaMethod   *ChosenScaMethod       `json:"chosenScaMethod"`
	ScaMethods        []AuthenticationObject `json:"scaMethods"`
	TransactionStatus TransactionStatusEnum  `json:"transactionStatus"`
}
