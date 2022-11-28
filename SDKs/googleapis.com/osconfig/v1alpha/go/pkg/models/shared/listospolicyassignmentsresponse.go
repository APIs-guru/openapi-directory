package shared

// ListOsPolicyAssignmentsResponse
// A response message for listing all assignments under given parent.
type ListOsPolicyAssignmentsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments,omitempty"`
}
