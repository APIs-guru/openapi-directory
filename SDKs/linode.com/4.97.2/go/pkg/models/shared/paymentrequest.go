package shared

// PaymentRequest
// Payment object request.
type PaymentRequest struct {
	Cvv *string `json:"cvv,omitempty"`
	Usd string  `json:"usd"`
}
