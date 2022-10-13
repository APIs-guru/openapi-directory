package shared

type APIKeyOut struct {
	Admin      *bool   `json:"admin"`
	Anonymized *bool   `json:"anonymized"`
	APIKey     *string `json:"apiKey"`
	Corporate  *bool   `json:"corporate"`
	Disabled   *bool   `json:"disabled"`
	Learnable  *bool   `json:"learnable"`
	Partner    *bool   `json:"partner"`
	Striped    *bool   `json:"striped"`
	UserID     *string `json:"userId"`
	Vetted     *bool   `json:"vetted"`
}
