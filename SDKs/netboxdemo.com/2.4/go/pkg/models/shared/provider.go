package shared

import (
"time")

type Provider struct {
    Account *string `json:"account,omitempty"`
    AdminContact *string `json:"admin_contact,omitempty"`
    Asn *int64 `json:"asn,omitempty"`
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    NocContact *string `json:"noc_contact,omitempty"`
    PortalURL *string `json:"portal_url,omitempty"`
    Slug string `json:"slug"`
    Tags []string `json:"tags,omitempty"`
    
}

