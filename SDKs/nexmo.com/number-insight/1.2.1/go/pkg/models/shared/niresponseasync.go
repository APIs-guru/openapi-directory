package shared

type NiResponseAsync struct {
	ErrorText        *string `json:"error_text"`
	Number           *string `json:"number"`
	RemainingBalance *string `json:"remaining_balance"`
	RequestID        *string `json:"request_id"`
	RequestPrice     *string `json:"request_price"`
	Status           *int64  `json:"status"`
}
