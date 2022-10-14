package shared

type StartScaprocessResponse struct {
	Links           map[string]HrefType    `json:"_links"`
	AuthorisationID string                 `json:"authorisationId"`
	ChallengeData   *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	PsuMessage      *string                `json:"psuMessage,omitempty"`
	ScaMethods      []AuthenticationObject `json:"scaMethods,omitempty"`
	ScaStatus       ScaStatusEnum          `json:"scaStatus"`
}
