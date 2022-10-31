package shared



type MarketingEventEmailSubscriber struct {
    ContactProperties map[string]string `json:"contactProperties,omitempty"`
    Email string `json:"email"`
    InteractionDateTime int64 `json:"interactionDateTime"`
    Properties map[string]string `json:"properties,omitempty"`
    
}

