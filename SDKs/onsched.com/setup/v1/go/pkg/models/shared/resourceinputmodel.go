package shared

type ResourceInputModel struct {
	Address      *AddressInputModel         `json:"address"`
	Availability *AvailabilityInputModel    `json:"availability"`
	Contact      *ContactInputModel         `json:"contact"`
	CustomFields *CustomFieldInputModel     `json:"customFields"`
	Description  *string                    `json:"description"`
	Email        *string                    `json:"email"`
	GroupID      *string                    `json:"groupId"`
	LocationID   *string                    `json:"locationId"`
	Name         *string                    `json:"name"`
	Options      *ResourceOptionsInputModel `json:"options"`
	ServiceIds   []string                   `json:"serviceIds"`
	TimezoneID   *string                    `json:"timezoneId"`
}
