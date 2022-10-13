package shared

type DenyMemberJoiningRuleUpdatePartial struct {
	ConsumingAccount *string `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  *string `json:"managing_account"`
	Type             string  `json:"type"`
}
