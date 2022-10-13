package shared

type Stage struct {
	Profiles []string  `json:"profiles"`
	Strategy *Strategy `json:"strategy"`
	TargetID *string   `json:"targetId"`
}
