package shared

type LiveChatSuperChatDetails struct {
	AmountDisplayString *string `json:"amountDisplayString"`
	AmountMicros        *string `json:"amountMicros"`
	Currency            *string `json:"currency"`
	Tier                *int64  `json:"tier"`
	UserComment         *string `json:"userComment"`
}
