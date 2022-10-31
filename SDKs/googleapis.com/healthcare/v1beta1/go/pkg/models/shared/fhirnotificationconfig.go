package shared



type FhirNotificationConfig struct {
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    SendFullResource *bool `json:"sendFullResource,omitempty"`
    
}

