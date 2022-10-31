package shared

import (
	"time"
)

type UserActionAction struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type UserAction struct {
	Action  UserActionAction `json:"action"`
	ID      *int64           `json:"id,omitempty"`
	Message *string          `json:"message,omitempty"`
	Time    *time.Time       `json:"time,omitempty"`
	User    NestedUser       `json:"user"`
}
