package shared

import (
	"time"
)

type KeyView struct {
	Action           string       `json:"action"`
	CallbackOnModify bool         `json:"callbackOnModify"`
	CallbackURL      *string      `json:"callbackUrl,omitempty"`
	Commenced        time.Time    `json:"commenced"`
	Created          *time.Time   `json:"created,omitempty"`
	Current          *bool        `json:"current,omitempty"`
	Custom           *interface{} `json:"custom,omitempty"`
	Frequency        string       `json:"frequency"`
	Name             *string      `json:"name,omitempty"`
	Serial           *string      `json:"serial,omitempty"`
	Updated          *time.Time   `json:"updated,omitempty"`
}
