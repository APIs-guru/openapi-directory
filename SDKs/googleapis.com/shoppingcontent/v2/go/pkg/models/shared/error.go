package shared

type Error struct {
	Domain  *string `json:"domain"`
	Message *string `json:"message"`
	Reason  *string `json:"reason"`
}
