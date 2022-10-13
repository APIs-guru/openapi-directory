package shared

import (
	"time"
)

type WritableSiteStatusStatusEnum string

const (
	WritableSiteStatusStatusEnumActive  WritableSiteStatusStatusEnum = "active"
	WritableSiteStatusStatusEnumPlanned WritableSiteStatusStatusEnum = "planned"
	WritableSiteStatusStatusEnumRetired WritableSiteStatusStatusEnum = "retired"
)

type WritableSite struct {
	Asn                 *int64                        `json:"asn"`
	CircuitCount        *int64                        `json:"circuit_count"`
	Comments            *string                       `json:"comments"`
	ContactEmail        *string                       `json:"contact_email"`
	ContactName         *string                       `json:"contact_name"`
	ContactPhone        *string                       `json:"contact_phone"`
	Created             *time.Time                    `json:"created"`
	CustomFields        map[string]interface{}        `json:"custom_fields"`
	Description         *string                       `json:"description"`
	DeviceCount         *int64                        `json:"device_count"`
	Facility            *string                       `json:"facility"`
	ID                  *int64                        `json:"id"`
	LastUpdated         *time.Time                    `json:"last_updated"`
	Latitude            *string                       `json:"latitude"`
	Longitude           *string                       `json:"longitude"`
	Name                string                        `json:"name"`
	PhysicalAddress     *string                       `json:"physical_address"`
	PrefixCount         *int64                        `json:"prefix_count"`
	RackCount           *int64                        `json:"rack_count"`
	Region              *int64                        `json:"region"`
	ShippingAddress     *string                       `json:"shipping_address"`
	Slug                string                        `json:"slug"`
	Status              *WritableSiteStatusStatusEnum `json:"status"`
	Tags                []string                      `json:"tags"`
	Tenant              *int64                        `json:"tenant"`
	TimeZone            *string                       `json:"time_zone"`
	VirtualmachineCount *int64                        `json:"virtualmachine_count"`
	VlanCount           *int64                        `json:"vlan_count"`
}
