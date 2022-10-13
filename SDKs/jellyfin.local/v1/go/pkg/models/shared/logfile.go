package shared

import (
	"time"
)

type LogFile struct {
	DateCreated  *time.Time `json:"DateCreated"`
	DateModified *time.Time `json:"DateModified"`
	Name         *string    `json:"Name"`
	Size         *int64     `json:"Size"`
}
