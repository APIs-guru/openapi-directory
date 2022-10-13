package shared

type AllowMemberJoiningRuleRequest struct {
	CapacityMax      *int64  `json:"capacity_max"`
	CapacityMin      *int64  `json:"capacity_min"`
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  string  `json:"managing_account"`
	NetworkService   string  `json:"network_service"`
	Type             string  `json:"type"`
}
