package shared

type UserAction struct {
	Payload *string `json:"payload"`
	Type    *string `json:"type"`
}
