package shared

import (
	"time"
)

type ProductView struct {
	Created       *time.Time         `json:"created"`
	Custom        *interface{}       `json:"custom"`
	Name          *string            `json:"name"`
	Serial        *string            `json:"serial"`
	Subscriptions []SubscriptionView `json:"subscriptions"`
	Updated       *time.Time         `json:"updated"`
}
