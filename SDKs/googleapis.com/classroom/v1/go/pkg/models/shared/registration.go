package shared

type Registration struct {
	CloudPubsubTopic *CloudPubsubTopic `json:"cloudPubsubTopic"`
	ExpiryTime       *string           `json:"expiryTime"`
	Feed             *Feed             `json:"feed"`
	RegistrationID   *string           `json:"registrationId"`
}
