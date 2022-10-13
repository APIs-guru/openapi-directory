package shared

type SpecialHourPeriod struct {
	CloseTime *string `json:"closeTime"`
	EndDate   *Date   `json:"endDate"`
	IsClosed  *bool   `json:"isClosed"`
	OpenTime  *string `json:"openTime"`
	StartDate *Date   `json:"startDate"`
}
