package shared

import (
"time")

type WritableRack struct {
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DescUnits *bool `json:"desc_units,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    FacilityID *string `json:"facility_id,omitempty"`
    Group *int64 `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Role *int64 `json:"role,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Site int64 `json:"site"`
    Tags []string `json:"tags,omitempty"`
    Tenant *int64 `json:"tenant,omitempty"`
    Type *int64 `json:"type,omitempty"`
    UHeight *int64 `json:"u_height,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

