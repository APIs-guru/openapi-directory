package shared



type ListTeachersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Teachers []Teacher `json:"teachers,omitempty"`
    
}

