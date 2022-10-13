package shared

type MoreHours struct {
	HoursTypeID *string      `json:"hoursTypeId"`
	Periods     []TimePeriod `json:"periods"`
}
