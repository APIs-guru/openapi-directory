package shared

type HolidayCutoff struct {
	DeadlineDate     *string `json:"deadlineDate,omitempty"`
	DeadlineHour     *int64  `json:"deadlineHour,omitempty"`
	DeadlineTimezone *string `json:"deadlineTimezone,omitempty"`
	HolidayID        *string `json:"holidayId,omitempty"`
	VisibleFromDate  *string `json:"visibleFromDate,omitempty"`
}
