package shared

import (
"time")


type SiteStatusLabelEnum string

const (
    SiteStatusLabelEnumActive SiteStatusLabelEnum = "Active"
SiteStatusLabelEnumPlanned SiteStatusLabelEnum = "Planned"
SiteStatusLabelEnumRetired SiteStatusLabelEnum = "Retired"
)



type SiteStatusValueEnum string

const (
    SiteStatusValueEnumActive SiteStatusValueEnum = "active"
SiteStatusValueEnumPlanned SiteStatusValueEnum = "planned"
SiteStatusValueEnumRetired SiteStatusValueEnum = "retired"
)


type SiteStatus struct {
    Label SiteStatusLabelEnum `json:"label"`
    Value SiteStatusValueEnum `json:"value"`
    
}

type Site struct {
    Asn *int64 `json:"asn,omitempty"`
    CircuitCount *int64 `json:"circuit_count,omitempty"`
    Comments *string `json:"comments,omitempty"`
    ContactEmail *string `json:"contact_email,omitempty"`
    ContactName *string `json:"contact_name,omitempty"`
    ContactPhone *string `json:"contact_phone,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    DeviceCount *int64 `json:"device_count,omitempty"`
    Facility *string `json:"facility,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Name string `json:"name"`
    PhysicalAddress *string `json:"physical_address,omitempty"`
    PrefixCount *int64 `json:"prefix_count,omitempty"`
    RackCount *int64 `json:"rack_count,omitempty"`
    Region *NestedRegion `json:"region,omitempty"`
    ShippingAddress *string `json:"shipping_address,omitempty"`
    Slug string `json:"slug"`
    Status *SiteStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    TimeZone *string `json:"time_zone,omitempty"`
    VirtualmachineCount *int64 `json:"virtualmachine_count,omitempty"`
    VlanCount *int64 `json:"vlan_count,omitempty"`
    
}

