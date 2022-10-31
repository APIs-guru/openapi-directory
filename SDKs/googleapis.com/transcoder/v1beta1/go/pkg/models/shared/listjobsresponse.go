package shared



type ListJobsResponse struct {
    Jobs []Job `json:"jobs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

