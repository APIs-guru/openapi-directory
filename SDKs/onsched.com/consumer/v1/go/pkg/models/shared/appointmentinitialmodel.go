package shared

import (
"time")

type AppointmentInitialModel struct {
    BookedBy *string `json:"bookedBy,omitempty"`
    BookingWindowID *string `json:"bookingWindowId,omitempty"`
    CalendarID *string `json:"calendarId,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    CustomerMessage *string `json:"customerMessage,omitempty"`
    Email *string `json:"email,omitempty"`
    EndDateTime *time.Time `json:"endDateTime,omitempty"`
    GroupSize *int32 `json:"groupSize,omitempty"`
    Location *string `json:"location,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneType *string `json:"phoneType,omitempty"`
    ResourceGroupID *string `json:"resourceGroupId,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceIds *string `json:"resourceIds,omitempty"`
    ServiceAllocationID *string `json:"serviceAllocationId,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    TimezoneName *string `json:"timezoneName,omitempty"`
    TravelAppointmentID *string `json:"travelAppointmentId,omitempty"`
    TravelTimeMins *int32 `json:"travelTimeMins,omitempty"`
    
}

