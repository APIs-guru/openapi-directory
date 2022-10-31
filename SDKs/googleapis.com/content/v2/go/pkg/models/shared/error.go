package shared

type Error struct {
	Domain  *string `json:"domain,omitempty"`
	Message *string `json:"message,omitempty"`
	Reason  *string `json:"reason,omitempty"`
}
