package shared

type ResourceUpdateModel struct {
	Address      *AddressUpdateModel         `json:"address"`
	Availability *AvailabilityInputModel     `json:"availability"`
	Contact      *ContactUpdateModel         `json:"contact"`
	CustomFields *CustomFieldUpdateModel     `json:"customFields"`
	Description  *string                     `json:"description"`
	Email        *string                     `json:"email"`
	GroupID      *string                     `json:"groupId"`
	LocationID   *string                     `json:"locationId"`
	Name         *string                     `json:"name"`
	Options      *ResourceOptionsUpdateModel `json:"options"`
	ServiceIds   []string                    `json:"serviceIds"`
	TimezoneID   *string                     `json:"timezoneId"`
}
