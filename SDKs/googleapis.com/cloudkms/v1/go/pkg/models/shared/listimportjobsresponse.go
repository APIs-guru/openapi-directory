package shared

type ListImportJobsResponse struct {
	ImportJobs    []ImportJob `json:"importJobs"`
	NextPageToken *string     `json:"nextPageToken"`
	TotalSize     *int32      `json:"totalSize"`
}
