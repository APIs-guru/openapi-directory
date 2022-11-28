package shared

// ConsentStatusResponse200
// Body of the JSON response for a successful get status request for a consent.
type ConsentStatusResponse200 struct {
	ConsentStatus ConsentStatusEnum `json:"consentStatus"`
	PsuMessage    *string           `json:"psuMessage,omitempty"`
}
