package shared



type NiResponseAsync struct {
    ErrorText *string `json:"error_text,omitempty"`
    Number *string `json:"number,omitempty"`
    RemainingBalance *string `json:"remaining_balance,omitempty"`
    RequestID *string `json:"request_id,omitempty"`
    RequestPrice *string `json:"request_price,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

