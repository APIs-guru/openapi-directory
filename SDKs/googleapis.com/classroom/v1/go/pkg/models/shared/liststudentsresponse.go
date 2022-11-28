package shared

// ListStudentsResponse
// Response when listing students.
type ListStudentsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Students      []Student `json:"students,omitempty"`
}
