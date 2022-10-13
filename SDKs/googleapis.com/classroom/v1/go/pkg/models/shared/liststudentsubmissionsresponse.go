package shared

type ListStudentSubmissionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	StudentSubmissions []StudentSubmission `json:"studentSubmissions"`
}
