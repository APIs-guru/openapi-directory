package shared

import (
"time")

type ServiceBlockViewModel struct {
    DeletedStatus *bool `json:"deletedStatus,omitempty"`
    DeletedTime *string `json:"deletedTime,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    EndTime *int32 `json:"endTime,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Repeat *RepeatViewModel `json:"repeat,omitempty"`
    Repeats *bool `json:"repeats,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    StartTime *int32 `json:"startTime,omitempty"`
    
}

