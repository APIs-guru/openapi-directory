package shared

import (
"time")


type VlanStatusLabelEnum string

const (
    VlanStatusLabelEnumActive VlanStatusLabelEnum = "Active"
VlanStatusLabelEnumReserved VlanStatusLabelEnum = "Reserved"
VlanStatusLabelEnumDeprecated VlanStatusLabelEnum = "Deprecated"
)



type VlanStatusValueEnum string

const (
    VlanStatusValueEnumActive VlanStatusValueEnum = "active"
VlanStatusValueEnumReserved VlanStatusValueEnum = "reserved"
VlanStatusValueEnumDeprecated VlanStatusValueEnum = "deprecated"
)


type VlanStatus struct {
    Label VlanStatusLabelEnum `json:"label"`
    Value VlanStatusValueEnum `json:"value"`
    
}

type Vlan struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Group *NestedVlanGroup `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    PrefixCount *int64 `json:"prefix_count,omitempty"`
    Role *NestedRole `json:"role,omitempty"`
    Site *NestedSite `json:"site,omitempty"`
    Status *VlanStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Vid int64 `json:"vid"`
    
}

