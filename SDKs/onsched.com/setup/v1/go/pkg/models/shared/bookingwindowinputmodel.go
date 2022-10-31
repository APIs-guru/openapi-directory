package shared

type BookingWindowInputModel struct {
	FromTime    *int32  `json:"fromTime,omitempty"`
	MaxBookings *int32  `json:"maxBookings,omitempty"`
	ServiceID   *string `json:"serviceId,omitempty"`
	ToTime      *int32  `json:"toTime,omitempty"`
}
