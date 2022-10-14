package shared

type Error struct {
	Domain *string `json:"domain,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
