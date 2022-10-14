package shared

type DenyMemberJoiningRuleUpdatePartial struct {
	ConsumingAccount *string `json:"consuming_account,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  *string `json:"managing_account,omitempty"`
	Type             string  `json:"type"`
}
