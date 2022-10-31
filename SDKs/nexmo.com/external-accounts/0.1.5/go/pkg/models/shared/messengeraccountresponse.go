package shared



type MessengerAccountResponse struct {
    AccessToken string `json:"access_token"`
    APIKey string `json:"api_key"`
    Applications []string `json:"applications,omitempty"`
    ExternalID string `json:"external_id"`
    Name *string `json:"name,omitempty"`
    Provider string `json:"provider"`
    
}

