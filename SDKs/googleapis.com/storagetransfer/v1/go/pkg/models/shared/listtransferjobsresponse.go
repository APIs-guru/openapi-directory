package shared

type ListTransferJobsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	TransferJobs  []TransferJob `json:"transferJobs"`
}
