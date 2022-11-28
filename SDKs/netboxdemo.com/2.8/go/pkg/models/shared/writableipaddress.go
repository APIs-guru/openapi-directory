package shared

type WritableIPAddressRoleEnum string

const (
	WritableIPAddressRoleEnumLoopback  WritableIPAddressRoleEnum = "loopback"
	WritableIPAddressRoleEnumSecondary WritableIPAddressRoleEnum = "secondary"
	WritableIPAddressRoleEnumAnycast   WritableIPAddressRoleEnum = "anycast"
	WritableIPAddressRoleEnumVip       WritableIPAddressRoleEnum = "vip"
	WritableIPAddressRoleEnumVrrp      WritableIPAddressRoleEnum = "vrrp"
	WritableIPAddressRoleEnumHsrp      WritableIPAddressRoleEnum = "hsrp"
	WritableIPAddressRoleEnumGlbp      WritableIPAddressRoleEnum = "glbp"
	WritableIPAddressRoleEnumCarp      WritableIPAddressRoleEnum = "carp"
)

type WritableIPAddressStatusEnum string

const (
	WritableIPAddressStatusEnumActive     WritableIPAddressStatusEnum = "active"
	WritableIPAddressStatusEnumReserved   WritableIPAddressStatusEnum = "reserved"
	WritableIPAddressStatusEnumDeprecated WritableIPAddressStatusEnum = "deprecated"
	WritableIPAddressStatusEnumDhcp       WritableIPAddressStatusEnum = "dhcp"
)

type WritableIPAddressInput struct {
	Address      string                       `json:"address"`
	CustomFields map[string]interface{}       `json:"custom_fields,omitempty"`
	Description  *string                      `json:"description,omitempty"`
	DNSName      *string                      `json:"dns_name,omitempty"`
	Interface    *int64                       `json:"interface,omitempty"`
	NatInside    *int64                       `json:"nat_inside,omitempty"`
	NatOutside   int64                        `json:"nat_outside"`
	Role         *WritableIPAddressRoleEnum   `json:"role,omitempty"`
	Status       *WritableIPAddressStatusEnum `json:"status,omitempty"`
	Tags         []string                     `json:"tags,omitempty"`
	Tenant       *int64                       `json:"tenant,omitempty"`
	Vrf          *int64                       `json:"vrf,omitempty"`
}
