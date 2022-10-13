package shared

type Error struct {
	Domain *string `json:"domain"`
	Reason *string `json:"reason"`
}
