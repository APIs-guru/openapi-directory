package shared

type MaintenanceWindow struct {
	DailyMaintenanceWindow *DailyMaintenanceWindow `json:"dailyMaintenanceWindow"`
	MaintenanceExclusions  map[string]TimeWindow   `json:"maintenanceExclusions"`
	RecurringWindow        *RecurringTimeWindow    `json:"recurringWindow"`
}
