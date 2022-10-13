package shared

type BookingWindowViewModel struct {
	FromTime    *int32  `json:"fromTime"`
	ID          *string `json:"id"`
	MaxBookings *int32  `json:"maxBookings"`
	ObjectName  *string `json:"objectName"`
	ServiceID   *string `json:"serviceId"`
	ToTime      *int32  `json:"toTime"`
}
