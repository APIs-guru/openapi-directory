package shared

type HolidayCutoff struct {
	DeadlineDate     *string `json:"deadlineDate"`
	DeadlineHour     *int64  `json:"deadlineHour"`
	DeadlineTimezone *string `json:"deadlineTimezone"`
	HolidayID        *string `json:"holidayId"`
	VisibleFromDate  *string `json:"visibleFromDate"`
}
