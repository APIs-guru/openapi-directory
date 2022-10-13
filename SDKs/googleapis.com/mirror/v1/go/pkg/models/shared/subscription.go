package shared

import (
	"time"
)

type Subscription struct {
	CallbackURL  *string       `json:"callbackUrl"`
	Collection   *string       `json:"collection"`
	ID           *string       `json:"id"`
	Kind         *string       `json:"kind"`
	Notification *Notification `json:"notification"`
	Operation    []string      `json:"operation"`
	Updated      *time.Time    `json:"updated"`
	UserToken    *string       `json:"userToken"`
	VerifyToken  *string       `json:"verifyToken"`
}
