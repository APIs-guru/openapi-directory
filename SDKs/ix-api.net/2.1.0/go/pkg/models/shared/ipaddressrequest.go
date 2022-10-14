package shared

import (
	"time"
)

type IPAddressRequest struct {
	Address          string     `json:"address"`
	ConsumingAccount string     `json:"consuming_account"`
	ExternalRef      *string    `json:"external_ref,omitempty"`
	Fqdn             *string    `json:"fqdn,omitempty"`
	ManagingAccount  string     `json:"managing_account"`
	PrefixLength     int32      `json:"prefix_length"`
	ValidNotAfter    *time.Time `json:"valid_not_after,omitempty"`
	ValidNotBefore   *time.Time `json:"valid_not_before,omitempty"`
	Version          int64      `json:"version"`
}
