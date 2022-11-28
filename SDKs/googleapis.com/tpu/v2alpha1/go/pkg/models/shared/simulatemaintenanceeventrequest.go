package shared

// SimulateMaintenanceEventRequest
// Request for SimulateMaintenanceEvent.
type SimulateMaintenanceEventRequest struct {
	WorkerIds []string `json:"workerIds,omitempty"`
}
