package shared

type MessengerAccountResponse struct {
	AccessToken  string   `json:"access_token"`
	APIKey       string   `json:"api_key"`
	Applications []string `json:"applications"`
	ExternalID   string   `json:"external_id"`
	Name         *string  `json:"name"`
	Provider     string   `json:"provider"`
}
