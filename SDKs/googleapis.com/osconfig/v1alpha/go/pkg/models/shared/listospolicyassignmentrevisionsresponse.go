package shared



type ListOsPolicyAssignmentRevisionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    OsPolicyAssignments []OsPolicyAssignment `json:"osPolicyAssignments,omitempty"`
    
}

