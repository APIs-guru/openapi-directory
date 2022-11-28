package shared

// ListRuntimesResponse
// Response for listing Managed Notebook Runtimes.
type ListRuntimesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Runtimes      []Runtime `json:"runtimes,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
