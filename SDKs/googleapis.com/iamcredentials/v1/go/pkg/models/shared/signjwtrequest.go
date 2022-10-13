package shared

type SignJwtRequest struct {
	Delegates []string `json:"delegates"`
	Payload   *string  `json:"payload"`
}
