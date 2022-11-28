package shared

// FhirNotificationConfig
// Contains the configuration for FHIR notifications.
type FhirNotificationConfig struct {
	PubsubTopic      *string `json:"pubsubTopic,omitempty"`
	SendFullResource *bool   `json:"sendFullResource,omitempty"`
}
