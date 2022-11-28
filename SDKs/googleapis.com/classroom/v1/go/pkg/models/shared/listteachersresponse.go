package shared

// ListTeachersResponse
// Response when listing teachers.
type ListTeachersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Teachers      []Teacher `json:"teachers,omitempty"`
}
