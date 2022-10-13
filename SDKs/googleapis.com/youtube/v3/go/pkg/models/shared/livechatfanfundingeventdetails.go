package shared

type LiveChatFanFundingEventDetails struct {
	AmountDisplayString *string `json:"amountDisplayString"`
	AmountMicros        *string `json:"amountMicros"`
	Currency            *string `json:"currency"`
	UserComment         *string `json:"userComment"`
}
