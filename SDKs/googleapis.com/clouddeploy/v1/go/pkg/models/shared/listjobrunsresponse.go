package shared



type ListJobRunsResponse struct {
    JobRuns []JobRun `json:"jobRuns,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

