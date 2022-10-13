package shared

import (
	"time"
)

type Login struct {
	Datetime   *time.Time `json:"datetime"`
	ID         *int64     `json:"id"`
	IP         *string    `json:"ip"`
	Restricted *bool      `json:"restricted"`
	Username   *string    `json:"username"`
}
