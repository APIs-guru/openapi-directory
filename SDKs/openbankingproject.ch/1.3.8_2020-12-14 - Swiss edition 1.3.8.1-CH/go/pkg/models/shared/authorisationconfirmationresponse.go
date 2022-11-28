package shared

// AuthorisationConfirmationResponse
// Body of the JSON response for an authorisation confirmation request.
type AuthorisationConfirmationResponse struct {
	Links      map[string]HrefType                    `json:"_links"`
	PsuMessage *string                                `json:"psuMessage,omitempty"`
	ScaStatus  ScaStatusAuthorisationConfirmationEnum `json:"scaStatus"`
}
