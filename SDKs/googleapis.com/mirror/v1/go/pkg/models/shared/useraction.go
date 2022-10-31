package shared

type UserAction struct {
	Payload *string `json:"payload,omitempty"`
	Type    *string `json:"type,omitempty"`
}
