package shared



type LocationViewModel struct {
    AdminEmail *string `json:"adminEmail,omitempty"`
    AdminName *string `json:"adminName,omitempty"`
    CompanyID *string `json:"companyId,omitempty"`
    CompanyName *string `json:"companyName,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    FriendlyID *string `json:"friendlyId,omitempty"`
    ID *string `json:"id,omitempty"`
    ImageURL *string `json:"imageUrl,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Logo *string `json:"logo,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    MaxCapacity *int32 `json:"maxCapacity,omitempty"`
    MaxGroupSize *int32 `json:"maxGroupSize,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PrimaryBusiness *bool `json:"primaryBusiness,omitempty"`
    PrimaryCalendarID *string `json:"primaryCalendarId,omitempty"`
    RegionID *string `json:"regionId,omitempty"`
    TimezoneIana *string `json:"timezoneIana,omitempty"`
    TimezoneID *string `json:"timezoneId,omitempty"`
    TimezoneOffset *int32 `json:"timezoneOffset,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

