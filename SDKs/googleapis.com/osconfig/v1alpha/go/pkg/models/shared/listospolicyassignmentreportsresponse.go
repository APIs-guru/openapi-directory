package shared

type ListOsPolicyAssignmentReportsResponse struct {
	NextPageToken             *string                    `json:"nextPageToken"`
	OsPolicyAssignmentReports []OsPolicyAssignmentReport `json:"osPolicyAssignmentReports"`
}
