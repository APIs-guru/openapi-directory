package shared

import (
	"time"
)

type Subscription struct {
	CallbackURL  *string       `json:"callbackUrl,omitempty"`
	Collection   *string       `json:"collection,omitempty"`
	ID           *string       `json:"id,omitempty"`
	Kind         *string       `json:"kind,omitempty"`
	Notification *Notification `json:"notification,omitempty"`
	Operation    []string      `json:"operation,omitempty"`
	Updated      *time.Time    `json:"updated,omitempty"`
	UserToken    *string       `json:"userToken,omitempty"`
	VerifyToken  *string       `json:"verifyToken,omitempty"`
}
