package shared



type ListImportJobsResponse struct {
    ImportJobs []ImportJob `json:"importJobs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

