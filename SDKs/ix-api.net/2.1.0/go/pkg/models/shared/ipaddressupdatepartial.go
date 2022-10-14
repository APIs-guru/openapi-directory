package shared

import (
	"time"
)

type IPAddressUpdatePartial struct {
	Address          *string    `json:"address,omitempty"`
	ConsumingAccount *string    `json:"consuming_account,omitempty"`
	ExternalRef      *string    `json:"external_ref,omitempty"`
	Fqdn             *string    `json:"fqdn,omitempty"`
	ManagingAccount  *string    `json:"managing_account,omitempty"`
	PrefixLength     *int32     `json:"prefix_length,omitempty"`
	ValidNotAfter    *time.Time `json:"valid_not_after,omitempty"`
	ValidNotBefore   *time.Time `json:"valid_not_before,omitempty"`
	Version          *int64     `json:"version,omitempty"`
}
