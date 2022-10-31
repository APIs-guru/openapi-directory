package shared



type TransferBalanceOrCreditRequest struct {
    Amount float64 `json:"amount"`
    From string `json:"from"`
    Reference *string `json:"reference,omitempty"`
    To string `json:"to"`
    
}

