package shared

// StartScaprocessResponse
// Body of the JSON response for a Start SCA authorisation request.
type StartScaprocessResponse struct {
	Links           map[string]HrefType    `json:"_links"`
	AuthorisationID string                 `json:"authorisationId"`
	ChallengeData   *ChallengeData         `json:"challengeData,omitempty"`
	ChosenScaMethod *ChosenScaMethod       `json:"chosenScaMethod,omitempty"`
	PsuMessage      *string                `json:"psuMessage,omitempty"`
	ScaMethods      []AuthenticationObject `json:"scaMethods,omitempty"`
	ScaStatus       ScaStatusEnum          `json:"scaStatus"`
}
