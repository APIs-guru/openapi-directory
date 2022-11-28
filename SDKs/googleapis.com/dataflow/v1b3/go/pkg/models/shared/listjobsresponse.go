package shared

// ListJobsResponse
// Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
type ListJobsResponse struct {
	FailedLocation []FailedLocation `json:"failedLocation,omitempty"`
	Jobs           []Job            `json:"jobs,omitempty"`
	NextPageToken  *string          `json:"nextPageToken,omitempty"`
}
