package shared

type SpecialHourPeriod struct {
	CloseTime *TimeOfDay `json:"closeTime,omitempty"`
	Closed    *bool      `json:"closed,omitempty"`
	EndDate   *Date      `json:"endDate,omitempty"`
	OpenTime  *TimeOfDay `json:"openTime,omitempty"`
	StartDate *Date      `json:"startDate,omitempty"`
}
