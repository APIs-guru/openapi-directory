package shared



type ListStudentsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Students []Student `json:"students,omitempty"`
    
}

