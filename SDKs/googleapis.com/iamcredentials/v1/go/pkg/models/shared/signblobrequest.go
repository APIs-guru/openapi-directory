package shared

type SignBlobRequest struct {
	Delegates []string `json:"delegates"`
	Payload   *string  `json:"payload"`
}
