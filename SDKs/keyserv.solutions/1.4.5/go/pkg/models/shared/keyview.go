package shared

import (
	"time"
)

type KeyView struct {
	Action           string       `json:"action"`
	CallbackOnModify bool         `json:"callbackOnModify"`
	CallbackURL      *string      `json:"callbackUrl"`
	Commenced        time.Time    `json:"commenced"`
	Created          *time.Time   `json:"created"`
	Current          *bool        `json:"current"`
	Custom           *interface{} `json:"custom"`
	Frequency        string       `json:"frequency"`
	Name             *string      `json:"name"`
	Serial           *string      `json:"serial"`
	Updated          *time.Time   `json:"updated"`
}
