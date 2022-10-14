package shared

type ContactRequest struct {
	ConsumingAccount string  `json:"consuming_account"`
	Email            *string `json:"email,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  string  `json:"managing_account"`
	Name             *string `json:"name,omitempty"`
	Telephone        *string `json:"telephone,omitempty"`
}
