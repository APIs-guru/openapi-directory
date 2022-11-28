package shared

// ListStudentSubmissionsResponse
// Response when listing student submissions.
type ListStudentSubmissionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	StudentSubmissions []StudentSubmission `json:"studentSubmissions,omitempty"`
}
