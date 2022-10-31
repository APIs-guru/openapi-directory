package shared




type AccountResponseProviderEnum string

const (
    AccountResponseProviderEnumMessenger AccountResponseProviderEnum = "messenger"
AccountResponseProviderEnumViberServiceMsg AccountResponseProviderEnum = "viber_service_msg"
AccountResponseProviderEnumWhatsapp AccountResponseProviderEnum = "whatsapp"
)


type AccountResponse struct {
    AccessToken *string `json:"access_token,omitempty"`
    APIKey string `json:"api_key"`
    Applications []string `json:"applications,omitempty"`
    ExternalID string `json:"external_id"`
    Name *string `json:"name,omitempty"`
    Provider AccountResponseProviderEnum `json:"provider"`
    
}

