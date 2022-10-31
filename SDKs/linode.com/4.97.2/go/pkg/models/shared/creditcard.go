package shared



type CreditCard struct {
    CardNumber string `json:"card_number"`
    Cvv string `json:"cvv"`
    ExpiryMonth int64 `json:"expiry_month"`
    ExpiryYear int64 `json:"expiry_year"`
    
}

