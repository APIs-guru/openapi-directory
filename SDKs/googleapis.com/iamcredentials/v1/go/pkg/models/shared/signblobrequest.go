package shared

type SignBlobRequest struct {
	Delegates []string `json:"delegates,omitempty"`
	Payload   *string  `json:"payload,omitempty"`
}
