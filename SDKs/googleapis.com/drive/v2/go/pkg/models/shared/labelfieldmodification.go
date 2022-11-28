package shared

import (
	"time"
)

// LabelFieldModification
// A modification to a label's field.
type LabelFieldModification struct {
	FieldID            *string     `json:"fieldId,omitempty"`
	Kind               *string     `json:"kind,omitempty"`
	SetDateValues      []time.Time `json:"setDateValues,omitempty"`
	SetIntegerValues   []string    `json:"setIntegerValues,omitempty"`
	SetSelectionValues []string    `json:"setSelectionValues,omitempty"`
	SetTextValues      []string    `json:"setTextValues,omitempty"`
	SetUserValues      []string    `json:"setUserValues,omitempty"`
	UnsetValues        *bool       `json:"unsetValues,omitempty"`
}
