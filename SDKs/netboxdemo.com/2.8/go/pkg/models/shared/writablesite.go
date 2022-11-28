package shared

type WritableSiteStatusEnum string

const (
	WritableSiteStatusEnumActive  WritableSiteStatusEnum = "active"
	WritableSiteStatusEnumPlanned WritableSiteStatusEnum = "planned"
	WritableSiteStatusEnumRetired WritableSiteStatusEnum = "retired"
)

type WritableSiteInput struct {
	Asn             *int64                  `json:"asn,omitempty"`
	Comments        *string                 `json:"comments,omitempty"`
	ContactEmail    *string                 `json:"contact_email,omitempty"`
	ContactName     *string                 `json:"contact_name,omitempty"`
	ContactPhone    *string                 `json:"contact_phone,omitempty"`
	CustomFields    map[string]interface{}  `json:"custom_fields,omitempty"`
	Description     *string                 `json:"description,omitempty"`
	Facility        *string                 `json:"facility,omitempty"`
	Latitude        *string                 `json:"latitude,omitempty"`
	Longitude       *string                 `json:"longitude,omitempty"`
	Name            string                  `json:"name"`
	PhysicalAddress *string                 `json:"physical_address,omitempty"`
	Region          *int64                  `json:"region,omitempty"`
	ShippingAddress *string                 `json:"shipping_address,omitempty"`
	Slug            string                  `json:"slug"`
	Status          *WritableSiteStatusEnum `json:"status,omitempty"`
	Tags            []string                `json:"tags,omitempty"`
	Tenant          *int64                  `json:"tenant,omitempty"`
	TimeZone        *string                 `json:"time_zone,omitempty"`
}
