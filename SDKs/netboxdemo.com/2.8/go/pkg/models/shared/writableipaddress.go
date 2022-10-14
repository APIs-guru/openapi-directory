package shared

import (
	"time"
)

type WritableIPAddressRoleRoleEnum string

const (
	WritableIPAddressRoleRoleEnumLoopback  WritableIPAddressRoleRoleEnum = "loopback"
	WritableIPAddressRoleRoleEnumSecondary WritableIPAddressRoleRoleEnum = "secondary"
	WritableIPAddressRoleRoleEnumAnycast   WritableIPAddressRoleRoleEnum = "anycast"
	WritableIPAddressRoleRoleEnumVip       WritableIPAddressRoleRoleEnum = "vip"
	WritableIPAddressRoleRoleEnumVrrp      WritableIPAddressRoleRoleEnum = "vrrp"
	WritableIPAddressRoleRoleEnumHsrp      WritableIPAddressRoleRoleEnum = "hsrp"
	WritableIPAddressRoleRoleEnumGlbp      WritableIPAddressRoleRoleEnum = "glbp"
	WritableIPAddressRoleRoleEnumCarp      WritableIPAddressRoleRoleEnum = "carp"
)

type WritableIPAddressStatusStatusEnum string

const (
	WritableIPAddressStatusStatusEnumActive     WritableIPAddressStatusStatusEnum = "active"
	WritableIPAddressStatusStatusEnumReserved   WritableIPAddressStatusStatusEnum = "reserved"
	WritableIPAddressStatusStatusEnumDeprecated WritableIPAddressStatusStatusEnum = "deprecated"
	WritableIPAddressStatusStatusEnumDhcp       WritableIPAddressStatusStatusEnum = "dhcp"
)

type WritableIPAddress struct {
	Address      string                             `json:"address"`
	Created      *time.Time                         `json:"created,omitempty"`
	CustomFields map[string]interface{}             `json:"custom_fields,omitempty"`
	Description  *string                            `json:"description,omitempty"`
	DNSName      *string                            `json:"dns_name,omitempty"`
	Family       *string                            `json:"family,omitempty"`
	ID           *int64                             `json:"id,omitempty"`
	Interface    *int64                             `json:"interface,omitempty"`
	LastUpdated  *time.Time                         `json:"last_updated,omitempty"`
	NatInside    *int64                             `json:"nat_inside,omitempty"`
	NatOutside   int64                              `json:"nat_outside"`
	Role         *WritableIPAddressRoleRoleEnum     `json:"role,omitempty"`
	Status       *WritableIPAddressStatusStatusEnum `json:"status,omitempty"`
	Tags         []string                           `json:"tags,omitempty"`
	Tenant       *int64                             `json:"tenant,omitempty"`
	Vrf          *int64                             `json:"vrf,omitempty"`
}
