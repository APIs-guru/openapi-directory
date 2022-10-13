package shared

type ListUtilizationReportsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	Unreachable        []string            `json:"unreachable"`
	UtilizationReports []UtilizationReport `json:"utilizationReports"`
}
