package shared

import (
	"time"
)

type LabelField struct {
	DateString []time.Time `json:"dateString,omitempty"`
	ID         *string     `json:"id,omitempty"`
	Integer    []string    `json:"integer,omitempty"`
	Kind       *string     `json:"kind,omitempty"`
	Selection  []string    `json:"selection,omitempty"`
	Text       []string    `json:"text,omitempty"`
	User       []User      `json:"user,omitempty"`
	ValueType  *string     `json:"valueType,omitempty"`
}
