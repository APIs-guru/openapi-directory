package shared



type Registration struct {
    CloudPubsubTopic *CloudPubsubTopic `json:"cloudPubsubTopic,omitempty"`
    ExpiryTime *string `json:"expiryTime,omitempty"`
    Feed *Feed `json:"feed,omitempty"`
    RegistrationID *string `json:"registrationId,omitempty"`
    
}

