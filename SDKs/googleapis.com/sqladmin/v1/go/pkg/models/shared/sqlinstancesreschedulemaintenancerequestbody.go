package shared

// SQLInstancesRescheduleMaintenanceRequestBody
// Reschedule options for maintenance windows.
type SQLInstancesRescheduleMaintenanceRequestBody struct {
	Reschedule *Reschedule `json:"reschedule,omitempty"`
}
