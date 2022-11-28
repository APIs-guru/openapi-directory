package shared

// LeaseTasksResponse
// Response message for leasing tasks using LeaseTasks.
type LeaseTasksResponse struct {
	Tasks []Task `json:"tasks,omitempty"`
}
