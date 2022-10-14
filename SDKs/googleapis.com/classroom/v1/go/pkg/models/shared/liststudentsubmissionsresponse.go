package shared

type ListStudentSubmissionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	StudentSubmissions []StudentSubmission `json:"studentSubmissions,omitempty"`
}
