package shared

import (
"time")

type SiteStatus struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type Site struct {
    Asn *int64 `json:"asn,omitempty"`
    Comments *string `json:"comments,omitempty"`
    ContactEmail *string `json:"contact_email,omitempty"`
    ContactName *string `json:"contact_name,omitempty"`
    ContactPhone *string `json:"contact_phone,omitempty"`
    CountCircuits *int64 `json:"count_circuits,omitempty"`
    CountDevices *int64 `json:"count_devices,omitempty"`
    CountPrefixes *int64 `json:"count_prefixes,omitempty"`
    CountRacks *int64 `json:"count_racks,omitempty"`
    CountVlans *int64 `json:"count_vlans,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Facility *string `json:"facility,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Name string `json:"name"`
    PhysicalAddress *string `json:"physical_address,omitempty"`
    Region *NestedRegion `json:"region,omitempty"`
    ShippingAddress *string `json:"shipping_address,omitempty"`
    Slug string `json:"slug"`
    Status *SiteStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    TimeZone *string `json:"time_zone,omitempty"`
    
}

