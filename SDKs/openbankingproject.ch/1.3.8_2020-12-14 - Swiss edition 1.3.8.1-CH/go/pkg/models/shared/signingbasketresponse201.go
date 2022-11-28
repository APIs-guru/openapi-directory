package shared

// SigningBasketResponse201
// Body of the JSON response for a successful create signing basket request.
type SigningBasketResponse201 struct {
	Links             LinksSigningBasket       `json:"_links"`
	BasketID          string                   `json:"basketId"`
	ChallengeData     *ChallengeData           `json:"challengeData,omitempty"`
	ChosenScaMethod   *ChosenScaMethod         `json:"chosenScaMethod,omitempty"`
	PsuMessage        *string                  `json:"psuMessage,omitempty"`
	ScaMethods        []AuthenticationObject   `json:"scaMethods,omitempty"`
	TppMessages       []TppMessage2Xx          `json:"tppMessages,omitempty"`
	TransactionStatus TransactionStatusSbsEnum `json:"transactionStatus"`
}
