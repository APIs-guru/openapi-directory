package shared

import (
"time")

type ServiceAllocationUpdateModel struct {
    AllDay *bool `json:"allDay,omitempty"`
    BookingLimit *int32 `json:"bookingLimit,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    EndTime *int32 `json:"endTime,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Repeats *bool `json:"repeats,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    StartTime *int32 `json:"startTime,omitempty"`
    
}

