package shared



type ResourceInputModel struct {
    Address *AddressInputModel `json:"address,omitempty"`
    Availability *AvailabilityInputModel `json:"availability,omitempty"`
    Contact *ContactInputModel `json:"contact,omitempty"`
    CustomFields *CustomFieldInputModel `json:"customFields,omitempty"`
    Description *string `json:"description,omitempty"`
    Email *string `json:"email,omitempty"`
    GroupID *string `json:"groupId,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Name *string `json:"name,omitempty"`
    Options *ResourceOptionsInputModel `json:"options,omitempty"`
    ServiceIds []string `json:"serviceIds,omitempty"`
    TimezoneID *string `json:"timezoneId,omitempty"`
    
}

