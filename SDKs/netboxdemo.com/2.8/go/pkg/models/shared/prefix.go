package shared

import (
"time")


type PrefixFamilyLabelEnum string

const (
    PrefixFamilyLabelEnumIPv4 PrefixFamilyLabelEnum = "IPv4"
PrefixFamilyLabelEnumIPv6 PrefixFamilyLabelEnum = "IPv6"
)


type PrefixFamily struct {
    Label PrefixFamilyLabelEnum `json:"label"`
    Value int64 `json:"value"`
    
}


type PrefixStatusLabelEnum string

const (
    PrefixStatusLabelEnumContainer PrefixStatusLabelEnum = "Container"
PrefixStatusLabelEnumActive PrefixStatusLabelEnum = "Active"
PrefixStatusLabelEnumReserved PrefixStatusLabelEnum = "Reserved"
PrefixStatusLabelEnumDeprecated PrefixStatusLabelEnum = "Deprecated"
)



type PrefixStatusValueEnum string

const (
    PrefixStatusValueEnumContainer PrefixStatusValueEnum = "container"
PrefixStatusValueEnumActive PrefixStatusValueEnum = "active"
PrefixStatusValueEnumReserved PrefixStatusValueEnum = "reserved"
PrefixStatusValueEnumDeprecated PrefixStatusValueEnum = "deprecated"
)


type PrefixStatus struct {
    Label PrefixStatusLabelEnum `json:"label"`
    Value PrefixStatusValueEnum `json:"value"`
    
}

type Prefix struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Family *PrefixFamily `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsPool *bool `json:"is_pool,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Prefix string `json:"prefix"`
    Role *NestedRole `json:"role,omitempty"`
    Site *NestedSite `json:"site,omitempty"`
    Status *PrefixStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Vlan *NestedVlan `json:"vlan,omitempty"`
    Vrf *NestedVrf `json:"vrf,omitempty"`
    
}

