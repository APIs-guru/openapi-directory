package shared

import (
	"time"
)

type FirewallDevicesEntityTypeEnum string

const (
	FirewallDevicesEntityTypeEnumLinode FirewallDevicesEntityTypeEnum = "linode"
)

// FirewallDevicesEntity
// The Linode service that this Firewall has been applied to.
type FirewallDevicesEntity struct {
	ID    *int64                         `json:"id,omitempty"`
	Label *string                        `json:"label,omitempty"`
	Type  *FirewallDevicesEntityTypeEnum `json:"type,omitempty"`
	URL   *string                        `json:"url,omitempty"`
}

// FirewallDevices
// Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
type FirewallDevices struct {
	Created *time.Time             `json:"created,omitempty"`
	Entity  *FirewallDevicesEntity `json:"entity,omitempty"`
	ID      *int64                 `json:"id,omitempty"`
	Updated *time.Time             `json:"updated,omitempty"`
}
