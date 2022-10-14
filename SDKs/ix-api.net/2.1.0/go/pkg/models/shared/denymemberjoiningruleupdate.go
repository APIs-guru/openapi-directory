package shared

type DenyMemberJoiningRuleUpdate struct {
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  string  `json:"managing_account"`
	Type             string  `json:"type"`
}
