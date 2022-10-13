package shared

import (
	"time"
)

type LabelField struct {
	DateString []time.Time `json:"dateString"`
	ID         *string     `json:"id"`
	Integer    []string    `json:"integer"`
	Kind       *string     `json:"kind"`
	Selection  []string    `json:"selection"`
	Text       []string    `json:"text"`
	User       []User      `json:"user"`
	ValueType  *string     `json:"valueType"`
}
