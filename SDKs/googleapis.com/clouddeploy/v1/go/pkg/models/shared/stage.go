package shared

// Stage
// Stage specifies a location to which to deploy.
type Stage struct {
	Profiles []string  `json:"profiles,omitempty"`
	Strategy *Strategy `json:"strategy,omitempty"`
	TargetID *string   `json:"targetId,omitempty"`
}
