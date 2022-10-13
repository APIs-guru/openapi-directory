package shared

type VsmAccountResponse struct {
	APIKey       string   `json:"api_key"`
	Applications []string `json:"applications"`
	ExternalID   string   `json:"external_id"`
	Name         *string  `json:"name"`
	Provider     string   `json:"provider"`
}
