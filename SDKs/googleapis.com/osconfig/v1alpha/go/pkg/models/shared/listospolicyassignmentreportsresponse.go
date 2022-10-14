package shared

type ListOsPolicyAssignmentReportsResponse struct {
	NextPageToken             *string                    `json:"nextPageToken,omitempty"`
	OsPolicyAssignmentReports []OsPolicyAssignmentReport `json:"osPolicyAssignmentReports,omitempty"`
}
