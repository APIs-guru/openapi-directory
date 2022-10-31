package shared



type ServiceAllocationViewModel struct {
    BookingCount *int32 `json:"bookingCount,omitempty"`
    BookingLimit *int32 `json:"bookingLimit,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    EndTime *int32 `json:"endTime,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Repeat *RepeatViewModel `json:"repeat,omitempty"`
    Repeats *bool `json:"repeats,omitempty"`
    ResourceDescription *string `json:"resourceDescription,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceImageURL *string `json:"resourceImageUrl,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ServiceDescription *string `json:"serviceDescription,omitempty"`
    ServiceDuration *int32 `json:"serviceDuration,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    ServiceImageURL *string `json:"serviceImageUrl,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    StartTime *int32 `json:"startTime,omitempty"`
    TimezoneName *string `json:"timezoneName,omitempty"`
    TimezoneOffset *int32 `json:"timezoneOffset,omitempty"`
    
}

