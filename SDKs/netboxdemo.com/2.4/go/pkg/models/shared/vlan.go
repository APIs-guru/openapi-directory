package shared

import (
"time")

type VlanStatus struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
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
    Role *NestedRole `json:"role,omitempty"`
    Site *NestedSite `json:"site,omitempty"`
    Status *VlanStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Vid int64 `json:"vid"`
    
}

