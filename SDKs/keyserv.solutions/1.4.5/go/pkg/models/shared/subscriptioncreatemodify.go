package shared

type SubscriptionCreateModify struct {
	Action           string       `json:"action"`
	CallbackOnModify *bool        `json:"callbackOnModify"`
	CallbackURL      *string      `json:"callbackUrl"`
	Custom           *interface{} `json:"custom"`
	Frequency        string       `json:"frequency"`
	Key              *string      `json:"key"`
	Name             *string      `json:"name"`
	Serial           *string      `json:"serial"`
	StartFrom        *string      `json:"startFrom"`
}
