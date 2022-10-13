package shared

import (
	"time"
)

type MacAddress struct {
	Address          string     `json:"address"`
	ConsumingAccount string     `json:"consuming_account"`
	ExternalRef      *string    `json:"external_ref"`
	ID               string     `json:"id"`
	ManagingAccount  string     `json:"managing_account"`
	ValidNotAfter    *time.Time `json:"valid_not_after"`
	ValidNotBefore   *time.Time `json:"valid_not_before"`
}
