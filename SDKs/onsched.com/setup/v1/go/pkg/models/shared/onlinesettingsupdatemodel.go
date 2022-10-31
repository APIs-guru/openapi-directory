package shared



type OnlineSettingsUpdateModel struct {
    BookAheadUnit *int32 `json:"bookAheadUnit,omitempty"`
    BookAheadValue *int32 `json:"bookAheadValue,omitempty"`
    BookInAdvance *int32 `json:"bookInAdvance,omitempty"`
    BookingTimerMins *int32 `json:"bookingTimerMins,omitempty"`
    CustomerBookingsPerDay *int32 `json:"customerBookingsPerDay,omitempty"`
    EnableWorldTimezones *bool `json:"enableWorldTimezones,omitempty"`
    
}

