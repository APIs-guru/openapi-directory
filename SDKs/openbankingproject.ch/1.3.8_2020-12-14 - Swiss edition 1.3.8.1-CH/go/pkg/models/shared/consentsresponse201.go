package shared

type ConsentsResponse201 struct {
	Links           map[string]HrefType    `json:"_links"`
	ChallengeData   *ChallengeData         `json:"challengeData"`
	ChosenScaMethod *ChosenScaMethod       `json:"chosenScaMethod"`
	ConsentID       string                 `json:"consentId"`
	ConsentStatus   ConsentStatusEnum      `json:"consentStatus"`
	PsuMessage      *string                `json:"psuMessage"`
	ScaMethods      []AuthenticationObject `json:"scaMethods"`
}
