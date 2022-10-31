package shared



type LocationInputModel struct {
    Address *AddressInputModel `json:"address,omitempty"`
    AdminEmail *string `json:"adminEmail,omitempty"`
    AdminName *string `json:"adminName,omitempty"`
    BusinessHours *BusinessHoursInputModel `json:"businessHours,omitempty"`
    Defaults *BusinessDefaultsInputModel `json:"defaults,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    FriendlyID *string `json:"friendlyId,omitempty"`
    MaxCapacity *int32 `json:"maxCapacity,omitempty"`
    MaxGroupSize *int32 `json:"maxGroupSize,omitempty"`
    Name *string `json:"name,omitempty"`
    Phone *string `json:"phone,omitempty"`
    RegionID *string `json:"regionId,omitempty"`
    Settings *OnlineSettingsInputModel `json:"settings,omitempty"`
    TimezoneName *string `json:"timezoneName,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

