package shared

import (
	"time"
)

type PrefixFamilyLabelEnum string

const (
	PrefixFamilyLabelEnumIPv4 PrefixFamilyLabelEnum = "IPv4"
	PrefixFamilyLabelEnumIPv6 PrefixFamilyLabelEnum = "IPv6"
)

type PrefixFamilyFamily struct {
	Label PrefixFamilyLabelEnum `json:"label"`
	Value int64                 `json:"value"`
}

type PrefixStatusLabelEnum string

const (
	PrefixStatusLabelEnumContainer  PrefixStatusLabelEnum = "Container"
	PrefixStatusLabelEnumActive     PrefixStatusLabelEnum = "Active"
	PrefixStatusLabelEnumReserved   PrefixStatusLabelEnum = "Reserved"
	PrefixStatusLabelEnumDeprecated PrefixStatusLabelEnum = "Deprecated"
)

type PrefixStatusValueEnum string

const (
	PrefixStatusValueEnumContainer  PrefixStatusValueEnum = "container"
	PrefixStatusValueEnumActive     PrefixStatusValueEnum = "active"
	PrefixStatusValueEnumReserved   PrefixStatusValueEnum = "reserved"
	PrefixStatusValueEnumDeprecated PrefixStatusValueEnum = "deprecated"
)

type PrefixStatusStatus struct {
	Label PrefixStatusLabelEnum `json:"label"`
	Value PrefixStatusValueEnum `json:"value"`
}

type Prefix struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Family       *PrefixFamilyFamily    `json:"family"`
	ID           *int64                 `json:"id"`
	IsPool       *bool                  `json:"is_pool"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Role         *NestedRole            `json:"role"`
	Site         *NestedSite            `json:"site"`
	Status       *PrefixStatusStatus    `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vlan         *NestedVlan            `json:"vlan"`
	Vrf          *NestedVrf             `json:"vrf"`
}
