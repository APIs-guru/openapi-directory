package shared

import (
	"time"
)

type ProductView struct {
	Created       *time.Time         `json:"created,omitempty"`
	Custom        *interface{}       `json:"custom,omitempty"`
	Name          *string            `json:"name,omitempty"`
	Serial        *string            `json:"serial,omitempty"`
	Subscriptions []SubscriptionView `json:"subscriptions,omitempty"`
	Updated       *time.Time         `json:"updated,omitempty"`
}
