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
	Created      *time.Time                         `json:"created"`
	CustomFields map[string]interface{}             `json:"custom_fields"`
	Description  *string                            `json:"description"`
	DNSName      *string                            `json:"dns_name"`
	Family       *string                            `json:"family"`
	ID           *int64                             `json:"id"`
	Interface    *int64                             `json:"interface"`
	LastUpdated  *time.Time                         `json:"last_updated"`
	NatInside    *int64                             `json:"nat_inside"`
	NatOutside   int64                              `json:"nat_outside"`
	Role         *WritableIPAddressRoleRoleEnum     `json:"role"`
	Status       *WritableIPAddressStatusStatusEnum `json:"status"`
	Tags         []string                           `json:"tags"`
	Tenant       *int64                             `json:"tenant"`
	Vrf          *int64                             `json:"vrf"`
}
