package shared

import (
"time")

type RackType struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type RackWidth struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type Rack struct {
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DescUnits *bool `json:"desc_units,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    FacilityID *string `json:"facility_id,omitempty"`
    Group *NestedRackGroup `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Role *NestedRackRole `json:"role,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Site NestedSite `json:"site"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Type *RackType `json:"type,omitempty"`
    UHeight *int64 `json:"u_height,omitempty"`
    Width *RackWidth `json:"width,omitempty"`
    
}

