package shared

import (
	"time"
)

type SubscriptionView struct {
	Action           string       `json:"action"`
	CallbackOnModify bool         `json:"callbackOnModify"`
	CallbackURL      *string      `json:"callbackUrl"`
	Commenced        time.Time    `json:"commenced"`
	Created          *time.Time   `json:"created"`
	Custom           *interface{} `json:"custom"`
	Frequency        string       `json:"frequency"`
	Keys             []KeyView    `json:"keys"`
	Name             *string      `json:"name"`
	Updated          *time.Time   `json:"updated"`
}
