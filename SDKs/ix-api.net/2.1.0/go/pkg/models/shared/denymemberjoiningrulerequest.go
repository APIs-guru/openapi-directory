package shared

type DenyMemberJoiningRuleRequest struct {
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  string  `json:"managing_account"`
	NetworkService   string  `json:"network_service"`
	Type             string  `json:"type"`
}
