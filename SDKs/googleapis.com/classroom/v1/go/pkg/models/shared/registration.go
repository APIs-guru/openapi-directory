package shared

// Registration
// An instruction to Classroom to send notifications from the `feed` to the provided destination.
type Registration struct {
	CloudPubsubTopic *CloudPubsubTopic `json:"cloudPubsubTopic,omitempty"`
	ExpiryTime       *string           `json:"expiryTime,omitempty"`
	Feed             *Feed             `json:"feed,omitempty"`
	RegistrationID   *string           `json:"registrationId,omitempty"`
}
