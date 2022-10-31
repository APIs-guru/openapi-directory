package shared



type GoogleCloudRunV2ListJobsResponse struct {
    Jobs []GoogleCloudRunV2Job `json:"jobs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

