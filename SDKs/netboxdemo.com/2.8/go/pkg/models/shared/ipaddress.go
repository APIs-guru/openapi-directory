package shared

import (
	"time"
)

type IPAddressFamilyLabelEnum string

const (
	IPAddressFamilyLabelEnumIPv4 IPAddressFamilyLabelEnum = "IPv4"
	IPAddressFamilyLabelEnumIPv6 IPAddressFamilyLabelEnum = "IPv6"
)

type IPAddressFamilyFamily struct {
	Label IPAddressFamilyLabelEnum `json:"label"`
	Value int64                    `json:"value"`
}

type IPAddressRoleLabelEnum string

const (
	IPAddressRoleLabelEnumLoopback  IPAddressRoleLabelEnum = "Loopback"
	IPAddressRoleLabelEnumSecondary IPAddressRoleLabelEnum = "Secondary"
	IPAddressRoleLabelEnumAnycast   IPAddressRoleLabelEnum = "Anycast"
	IPAddressRoleLabelEnumVip       IPAddressRoleLabelEnum = "VIP"
	IPAddressRoleLabelEnumVrrp      IPAddressRoleLabelEnum = "VRRP"
	IPAddressRoleLabelEnumHsrp      IPAddressRoleLabelEnum = "HSRP"
	IPAddressRoleLabelEnumGlbp      IPAddressRoleLabelEnum = "GLBP"
	IPAddressRoleLabelEnumCarp      IPAddressRoleLabelEnum = "CARP"
)

type IPAddressRoleValueEnum string

const (
	IPAddressRoleValueEnumLoopback  IPAddressRoleValueEnum = "loopback"
	IPAddressRoleValueEnumSecondary IPAddressRoleValueEnum = "secondary"
	IPAddressRoleValueEnumAnycast   IPAddressRoleValueEnum = "anycast"
	IPAddressRoleValueEnumVip       IPAddressRoleValueEnum = "vip"
	IPAddressRoleValueEnumVrrp      IPAddressRoleValueEnum = "vrrp"
	IPAddressRoleValueEnumHsrp      IPAddressRoleValueEnum = "hsrp"
	IPAddressRoleValueEnumGlbp      IPAddressRoleValueEnum = "glbp"
	IPAddressRoleValueEnumCarp      IPAddressRoleValueEnum = "carp"
)

type IPAddressRoleRole struct {
	Label IPAddressRoleLabelEnum `json:"label"`
	Value IPAddressRoleValueEnum `json:"value"`
}

type IPAddressStatusLabelEnum string

const (
	IPAddressStatusLabelEnumActive     IPAddressStatusLabelEnum = "Active"
	IPAddressStatusLabelEnumReserved   IPAddressStatusLabelEnum = "Reserved"
	IPAddressStatusLabelEnumDeprecated IPAddressStatusLabelEnum = "Deprecated"
	IPAddressStatusLabelEnumDhcp       IPAddressStatusLabelEnum = "DHCP"
)

type IPAddressStatusValueEnum string

const (
	IPAddressStatusValueEnumActive     IPAddressStatusValueEnum = "active"
	IPAddressStatusValueEnumReserved   IPAddressStatusValueEnum = "reserved"
	IPAddressStatusValueEnumDeprecated IPAddressStatusValueEnum = "deprecated"
	IPAddressStatusValueEnumDhcp       IPAddressStatusValueEnum = "dhcp"
)

type IPAddressStatusStatus struct {
	Label IPAddressStatusLabelEnum `json:"label"`
	Value IPAddressStatusValueEnum `json:"value"`
}

type IPAddress struct {
	Address      string                 `json:"address"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	DNSName      *string                `json:"dns_name"`
	Family       *IPAddressFamilyFamily `json:"family"`
	ID           *int64                 `json:"id"`
	Interface    *IPAddressInterface    `json:"interface"`
	LastUpdated  *time.Time             `json:"last_updated"`
	NatInside    *NestedIPAddress       `json:"nat_inside"`
	NatOutside   *NestedIPAddress       `json:"nat_outside"`
	Role         *IPAddressRoleRole     `json:"role"`
	Status       *IPAddressStatusStatus `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vrf          *NestedVrf             `json:"vrf"`
}
