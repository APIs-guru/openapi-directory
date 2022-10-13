package shared

type DenyMaintenancePeriod struct {
	EndDate   *string `json:"endDate"`
	StartDate *string `json:"startDate"`
	Time      *string `json:"time"`
}
