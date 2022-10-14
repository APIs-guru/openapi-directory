package shared

type SpecialHourPeriod struct {
	CloseTime *string `json:"closeTime,omitempty"`
	EndDate   *Date   `json:"endDate,omitempty"`
	IsClosed  *bool   `json:"isClosed,omitempty"`
	OpenTime  *string `json:"openTime,omitempty"`
	StartDate *Date   `json:"startDate,omitempty"`
}
