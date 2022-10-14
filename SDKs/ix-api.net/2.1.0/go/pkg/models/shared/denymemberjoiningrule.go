package shared

type DenyMemberJoiningRule struct {
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ID               string  `json:"id"`
	ManagingAccount  string  `json:"managing_account"`
	NetworkService   string  `json:"network_service"`
	Type             string  `json:"type"`
}
