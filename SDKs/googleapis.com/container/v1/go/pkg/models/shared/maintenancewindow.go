package shared

// MaintenanceWindow
// MaintenanceWindow defines the maintenance window to be used for the cluster.
type MaintenanceWindow struct {
	DailyMaintenanceWindow *DailyMaintenanceWindow `json:"dailyMaintenanceWindow,omitempty"`
	MaintenanceExclusions  map[string]TimeWindow   `json:"maintenanceExclusions,omitempty"`
	RecurringWindow        *RecurringTimeWindow    `json:"recurringWindow,omitempty"`
}
