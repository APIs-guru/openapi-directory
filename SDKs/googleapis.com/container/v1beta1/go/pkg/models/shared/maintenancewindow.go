package shared



type MaintenanceWindow struct {
    DailyMaintenanceWindow *DailyMaintenanceWindow `json:"dailyMaintenanceWindow,omitempty"`
    MaintenanceExclusions map[string]TimeWindow `json:"maintenanceExclusions,omitempty"`
    RecurringWindow *RecurringTimeWindow `json:"recurringWindow,omitempty"`
    
}

