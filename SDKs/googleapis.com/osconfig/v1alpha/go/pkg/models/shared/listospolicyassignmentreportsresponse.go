package shared

// ListOsPolicyAssignmentReportsResponse
// A response message for listing OS Policy assignment reports including the page of results and page token.
type ListOsPolicyAssignmentReportsResponse struct {
	NextPageToken             *string                    `json:"nextPageToken,omitempty"`
	OsPolicyAssignmentReports []OsPolicyAssignmentReport `json:"osPolicyAssignmentReports,omitempty"`
}
