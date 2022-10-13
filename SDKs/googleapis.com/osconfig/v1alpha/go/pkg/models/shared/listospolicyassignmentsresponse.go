package shared

type ListOsPolicyAssignmentsResponse struct {
	NextPageToken       *string              `json:"nextPageToken"`
	OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments"`
}
