package shared

import (
"time")

type WritableIPAddress struct {
    Address string `json:"address"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Family *int64 `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Interface *int64 `json:"interface,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    NatInside *int64 `json:"nat_inside,omitempty"`
    NatOutside int64 `json:"nat_outside"`
    Role *int64 `json:"role,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *int64 `json:"tenant,omitempty"`
    Vrf *int64 `json:"vrf,omitempty"`
    
}

