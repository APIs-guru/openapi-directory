package shared

type DenyMaintenancePeriod struct {
	EndDate   *string `json:"endDate,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Time      *string `json:"time,omitempty"`
}
