package shared

type SpecialHourPeriod struct {
	CloseTime *TimeOfDay `json:"closeTime"`
	Closed    *bool      `json:"closed"`
	EndDate   *Date      `json:"endDate"`
	OpenTime  *TimeOfDay `json:"openTime"`
	StartDate *Date      `json:"startDate"`
}
