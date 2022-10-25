package shared

import (
	"time"
)

type IPAddressFamilyLabelEnum string

const (
	IPAddressFamilyLabelEnumIPv4 IPAddressFamilyLabelEnum = "IPv4"
	IPAddressFamilyLabelEnumIPv6 IPAddressFamilyLabelEnum = "IPv6"
)

type IPAddressFamily struct {
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

type IPAddressRole struct {
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

type IPAddressStatus struct {
	Label IPAddressStatusLabelEnum `json:"label"`
	Value IPAddressStatusValueEnum `json:"value"`
}

type IPAddress struct {
	Address      string                 `json:"address"`
	Created      *time.Time             `json:"created,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	DNSName      *string                `json:"dns_name,omitempty"`
	Family       *IPAddressFamily       `json:"family,omitempty"`
	ID           *int64                 `json:"id,omitempty"`
	Interface    *IPAddressInterface    `json:"interface,omitempty"`
	LastUpdated  *time.Time             `json:"last_updated,omitempty"`
	NatInside    *NestedIPAddress       `json:"nat_inside,omitempty"`
	NatOutside   *NestedIPAddress       `json:"nat_outside,omitempty"`
	Role         *IPAddressRole         `json:"role,omitempty"`
	Status       *IPAddressStatus       `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *NestedTenant          `json:"tenant,omitempty"`
	Vrf          *NestedVrf             `json:"vrf,omitempty"`
}
