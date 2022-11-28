package shared

// RefreshDataSourceResponse
// The response from refreshing one or multiple data source objects.
type RefreshDataSourceResponse struct {
	Statuses []RefreshDataSourceObjectExecutionStatus `json:"statuses,omitempty"`
}
