package shared



type ListCutoverJobsResponse struct {
    CutoverJobs []CutoverJob `json:"cutoverJobs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

