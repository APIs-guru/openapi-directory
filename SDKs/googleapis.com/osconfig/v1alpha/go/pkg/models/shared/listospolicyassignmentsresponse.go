package shared

type ListOsPolicyAssignmentsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments,omitempty"`
}
