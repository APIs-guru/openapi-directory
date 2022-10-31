package shared



type LiveChatSuperChatDetails struct {
    AmountDisplayString *string `json:"amountDisplayString,omitempty"`
    AmountMicros *string `json:"amountMicros,omitempty"`
    Currency *string `json:"currency,omitempty"`
    Tier *int64 `json:"tier,omitempty"`
    UserComment *string `json:"userComment,omitempty"`
    
}

