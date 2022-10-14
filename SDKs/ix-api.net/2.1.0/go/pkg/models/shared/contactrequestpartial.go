package shared

type ContactRequestPartial struct {
	ConsumingAccount *string `json:"consuming_account,omitempty"`
	Email            *string `json:"email,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  *string `json:"managing_account,omitempty"`
	Name             *string `json:"name,omitempty"`
	Telephone        *string `json:"telephone,omitempty"`
}
