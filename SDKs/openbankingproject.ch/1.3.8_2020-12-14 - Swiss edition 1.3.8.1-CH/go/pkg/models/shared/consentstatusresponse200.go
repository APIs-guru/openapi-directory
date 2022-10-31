package shared



type ConsentStatusResponse200 struct {
    ConsentStatus ConsentStatusEnum `json:"consentStatus"`
    PsuMessage *string `json:"psuMessage,omitempty"`
    
}

