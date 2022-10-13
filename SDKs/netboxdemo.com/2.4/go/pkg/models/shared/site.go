package shared

import (
	"time"
)

type SiteStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Site struct {
	Asn             *int64                 `json:"asn"`
	Comments        *string                `json:"comments"`
	ContactEmail    *string                `json:"contact_email"`
	ContactName     *string                `json:"contact_name"`
	ContactPhone    *string                `json:"contact_phone"`
	CountCircuits   *int64                 `json:"count_circuits"`
	CountDevices    *int64                 `json:"count_devices"`
	CountPrefixes   *int64                 `json:"count_prefixes"`
	CountRacks      *int64                 `json:"count_racks"`
	CountVlans      *int64                 `json:"count_vlans"`
	Created         *time.Time             `json:"created"`
	CustomFields    map[string]interface{} `json:"custom_fields"`
	Description     *string                `json:"description"`
	Facility        *string                `json:"facility"`
	ID              *int64                 `json:"id"`
	LastUpdated     *time.Time             `json:"last_updated"`
	Latitude        *string                `json:"latitude"`
	Longitude       *string                `json:"longitude"`
	Name            string                 `json:"name"`
	PhysicalAddress *string                `json:"physical_address"`
	Region          *NestedRegion          `json:"region"`
	ShippingAddress *string                `json:"shipping_address"`
	Slug            string                 `json:"slug"`
	Status          *SiteStatusStatus      `json:"status"`
	Tags            []string               `json:"tags"`
	Tenant          *NestedTenant          `json:"tenant"`
	TimeZone        *string                `json:"time_zone"`
}
