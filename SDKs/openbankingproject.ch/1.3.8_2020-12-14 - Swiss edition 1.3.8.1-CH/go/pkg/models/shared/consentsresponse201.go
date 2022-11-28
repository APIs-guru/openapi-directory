package shared

// ConsentsResponse201
// Body of the JSON response for a successful consent request.
type ConsentsResponse201 struct {
	Links           map[string]HrefType    `json:"_links"`
	ChallengeData   *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	ConsentID       string                 `json:"consentId"`
	ConsentStatus   ConsentStatusEnum      `json:"consentStatus"`
	PsuMessage      *string                `json:"psuMessage,omitempty"`
	ScaMethods      []AuthenticationObject `json:"scaMethods,omitempty"`
}
