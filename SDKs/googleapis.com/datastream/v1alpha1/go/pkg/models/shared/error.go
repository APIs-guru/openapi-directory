package shared

type Error struct {
	Details   map[string]string `json:"details"`
	ErrorTime *string           `json:"errorTime"`
	ErrorUUID *string           `json:"errorUuid"`
	Message   *string           `json:"message"`
	Reason    *string           `json:"reason"`
}
