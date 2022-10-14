package shared

type AllowMemberJoiningRule struct {
	CapacityMax      *int64  `json:"capacity_max,omitempty"`
	CapacityMin      *int64  `json:"capacity_min,omitempty"`
	ConsumingAccount string  `json:"consuming_account"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ID               string  `json:"id"`
	ManagingAccount  string  `json:"managing_account"`
	NetworkService   string  `json:"network_service"`
	Type             string  `json:"type"`
}
