package shared

type AllowMemberJoiningRuleUpdate struct {
	CapacityMax      *int64  `json:"capacity_max"`
	CapacityMin      *int64  `json:"capacity_min"`
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  string  `json:"managing_account"`
	Type             string  `json:"type"`
}
