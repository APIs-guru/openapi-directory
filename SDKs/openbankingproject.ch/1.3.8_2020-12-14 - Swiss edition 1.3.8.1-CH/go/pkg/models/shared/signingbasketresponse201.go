package shared

type SigningBasketResponse201 struct {
	Links             LinksSigningBasket       `json:"_links"`
	BasketID          string                   `json:"basketId"`
	ChallengeData     *ChallengeData           `json:"challengeData"`
	ChosenScaMethod   *ChosenScaMethod         `json:"chosenScaMethod"`
	PsuMessage        *string                  `json:"psuMessage"`
	ScaMethods        []AuthenticationObject   `json:"scaMethods"`
	TppMessages       []TppMessage2Xx          `json:"tppMessages"`
	TransactionStatus TransactionStatusSbsEnum `json:"transactionStatus"`
}
