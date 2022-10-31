package shared

type ResourceUpdateModel struct {
	Address      *AddressUpdateModel         `json:"address,omitempty"`
	Availability *AvailabilityInputModel     `json:"availability,omitempty"`
	Contact      *ContactUpdateModel         `json:"contact,omitempty"`
	CustomFields *CustomFieldUpdateModel     `json:"customFields,omitempty"`
	Description  *string                     `json:"description,omitempty"`
	Email        *string                     `json:"email,omitempty"`
	GroupID      *string                     `json:"groupId,omitempty"`
	LocationID   *string                     `json:"locationId,omitempty"`
	Name         *string                     `json:"name,omitempty"`
	Options      *ResourceOptionsUpdateModel `json:"options,omitempty"`
	ServiceIds   []string                    `json:"serviceIds,omitempty"`
	TimezoneID   *string                     `json:"timezoneId,omitempty"`
}
