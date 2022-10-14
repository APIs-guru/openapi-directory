package shared

type AllowMemberJoiningRuleRequest struct {
	CapacityMax      *int64  `json:"capacity_max,omitempty"`
	CapacityMin      *int64  `json:"capacity_min,omitempty"`
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  string  `json:"managing_account"`
	NetworkService   string  `json:"network_service"`
	Type             string  `json:"type"`
}
