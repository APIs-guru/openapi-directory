package shared

import (
	"time"
)

type UserActionActionAction struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type UserAction struct {
	Action  UserActionActionAction `json:"action"`
	ID      *int64                 `json:"id"`
	Message *string                `json:"message"`
	Time    *time.Time             `json:"time"`
	User    NestedUser             `json:"user"`
}
