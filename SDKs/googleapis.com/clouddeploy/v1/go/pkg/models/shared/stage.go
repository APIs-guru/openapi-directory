package shared

type Stage struct {
	Profiles []string  `json:"profiles,omitempty"`
	Strategy *Strategy `json:"strategy,omitempty"`
	TargetID *string   `json:"targetId,omitempty"`
}
