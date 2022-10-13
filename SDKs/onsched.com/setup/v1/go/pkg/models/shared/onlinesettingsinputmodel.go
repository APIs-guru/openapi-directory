package shared

type OnlineSettingsInputModel struct {
	BookAheadUnit          *int32 `json:"bookAheadUnit"`
	BookAheadValue         *int32 `json:"bookAheadValue"`
	BookInAdvance          *int32 `json:"bookInAdvance"`
	BookingTimerMins       *int32 `json:"bookingTimerMins"`
	CustomerBookingsPerDay *int32 `json:"customerBookingsPerDay"`
	EnableWorldTimezones   *bool  `json:"enableWorldTimezones"`
}
