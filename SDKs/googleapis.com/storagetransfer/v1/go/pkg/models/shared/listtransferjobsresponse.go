package shared



type ListTransferJobsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferJobs []TransferJob `json:"transferJobs,omitempty"`
    
}

