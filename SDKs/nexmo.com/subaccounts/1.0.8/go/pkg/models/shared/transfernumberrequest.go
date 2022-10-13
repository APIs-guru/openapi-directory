package shared

type TransferNumberRequest struct {
	Country *string  `json:"country"`
	From    *string  `json:"from"`
	Number  *float64 `json:"number"`
	To      *string  `json:"to"`
}
