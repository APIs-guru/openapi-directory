package shared

type BookingWindowInputModel struct {
	FromTime    *int32  `json:"fromTime"`
	MaxBookings *int32  `json:"maxBookings"`
	ServiceID   *string `json:"serviceId"`
	ToTime      *int32  `json:"toTime"`
}
