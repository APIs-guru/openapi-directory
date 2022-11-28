package shared

// DenyMaintenancePeriod
// Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
type DenyMaintenancePeriod struct {
	EndDate   *string `json:"endDate,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Time      *string `json:"time,omitempty"`
}
