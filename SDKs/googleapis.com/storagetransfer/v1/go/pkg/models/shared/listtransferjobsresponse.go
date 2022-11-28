package shared

// ListTransferJobsResponse
// Response from ListTransferJobs.
type ListTransferJobsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	TransferJobs  []TransferJob `json:"transferJobs,omitempty"`
}
