package shared

type StartScaprocessResponse struct {
	Links           map[string]HrefType    `json:"_links"`
	AuthorisationID string                 `json:"authorisationId"`
	ChallengeData   *ChallengeData         `json:"challengeData"`
	ChosenScaMethod *ChosenScaMethod       `json:"chosenScaMethod"`
	PsuMessage      *string                `json:"psuMessage"`
	ScaMethods      []AuthenticationObject `json:"scaMethods"`
	ScaStatus       ScaStatusEnum          `json:"scaStatus"`
}
