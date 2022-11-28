package shared

// ListOsPolicyAssignmentRevisionsResponse
// A response message for listing all revisions for a OS policy assignment.
type ListOsPolicyAssignmentRevisionsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments,omitempty"`
}
