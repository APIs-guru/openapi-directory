package shared

type AuthorisationConfirmationResponse struct {
	Links      map[string]HrefType                    `json:"_links"`
	PsuMessage *string                                `json:"psuMessage"`
	ScaStatus  ScaStatusAuthorisationConfirmationEnum `json:"scaStatus"`
}
