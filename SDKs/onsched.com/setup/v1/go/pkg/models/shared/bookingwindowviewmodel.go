package shared



type BookingWindowViewModel struct {
    FromTime *int32 `json:"fromTime,omitempty"`
    ID *string `json:"id,omitempty"`
    MaxBookings *int32 `json:"maxBookings,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    ToTime *int32 `json:"toTime,omitempty"`
    
}

