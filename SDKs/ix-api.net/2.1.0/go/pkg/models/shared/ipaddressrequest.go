package shared

import (
	"time"
)

type IPAddressRequest struct {
	Address          string     `json:"address"`
	ConsumingAccount string     `json:"consuming_account"`
	ExternalRef      *string    `json:"external_ref"`
	Fqdn             *string    `json:"fqdn"`
	ManagingAccount  string     `json:"managing_account"`
	PrefixLength     int32      `json:"prefix_length"`
	ValidNotAfter    *time.Time `json:"valid_not_after"`
	ValidNotBefore   *time.Time `json:"valid_not_before"`
	Version          int64      `json:"version"`
}
