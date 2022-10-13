package shared

import (
	"time"
)

type LabelFieldModification struct {
	FieldID            *string     `json:"fieldId"`
	Kind               *string     `json:"kind"`
	SetDateValues      []time.Time `json:"setDateValues"`
	SetIntegerValues   []string    `json:"setIntegerValues"`
	SetSelectionValues []string    `json:"setSelectionValues"`
	SetTextValues      []string    `json:"setTextValues"`
	SetUserValues      []string    `json:"setUserValues"`
	UnsetValues        *bool       `json:"unsetValues"`
}
