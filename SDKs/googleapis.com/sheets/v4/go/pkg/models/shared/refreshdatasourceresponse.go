package shared

type RefreshDataSourceResponse struct {
	Statuses []RefreshDataSourceObjectExecutionStatus `json:"statuses"`
}
