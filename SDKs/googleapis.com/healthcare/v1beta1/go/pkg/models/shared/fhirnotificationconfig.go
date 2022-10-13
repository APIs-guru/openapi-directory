package shared

type FhirNotificationConfig struct {
	PubsubTopic      *string `json:"pubsubTopic"`
	SendFullResource *bool   `json:"sendFullResource"`
}
