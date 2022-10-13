package shared

type ContactRequest struct {
	ConsumingAccount string  `json:"consuming_account"`
	Email            *string `json:"email"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  string  `json:"managing_account"`
	Name             *string `json:"name"`
	Telephone        *string `json:"telephone"`
}
