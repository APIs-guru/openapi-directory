package shared

type ListOsPolicyAssignmentRevisionsResponse struct {
	NextPageToken       *string              `json:"nextPageToken"`
	OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments"`
}
