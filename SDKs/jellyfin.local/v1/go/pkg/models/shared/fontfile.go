package shared

import (
	"time"
)

type FontFile struct {
	DateCreated  *time.Time `json:"DateCreated"`
	DateModified *time.Time `json:"DateModified"`
	Name         *string    `json:"Name"`
	Size         *int64     `json:"Size"`
}
