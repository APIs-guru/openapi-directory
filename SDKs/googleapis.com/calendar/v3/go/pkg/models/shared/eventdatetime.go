package shared

import (
	"time"
)

type EventDateTime struct {
	Date     *time.Time `json:"date"`
	DateTime *time.Time `json:"dateTime"`
	TimeZone *string    `json:"timeZone"`
}
