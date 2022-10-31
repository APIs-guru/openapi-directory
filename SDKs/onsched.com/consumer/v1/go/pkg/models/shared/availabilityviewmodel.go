package shared



type AvailabilityViewModel struct {
    BusinessName *string `json:"businessName,omitempty"`
    CalendarID *string `json:"calendarId,omitempty"`
    CalendarResourceGroupID *string `json:"calendarResourceGroupId,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    FirstAvailableDate *string `json:"firstAvailableDate,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    ResourceDescription *string `json:"resourceDescription,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceIds *string `json:"resourceIds,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ServiceDescription *string `json:"serviceDescription,omitempty"`
    ServiceDuration *int32 `json:"serviceDuration,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    TzRequested *int32 `json:"tzRequested,omitempty"`
    
}

