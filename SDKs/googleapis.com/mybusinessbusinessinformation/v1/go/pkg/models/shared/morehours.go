package shared



type MoreHours struct {
    HoursTypeID *string `json:"hoursTypeId,omitempty"`
    Periods []TimePeriod `json:"periods,omitempty"`
    
}

