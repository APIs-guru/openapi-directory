package shared

import (
"time")

type PrefixStatus struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type Prefix struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Family *int64 `json:"family,omitempty"`
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

