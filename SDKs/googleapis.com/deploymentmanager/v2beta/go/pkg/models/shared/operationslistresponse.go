package shared

// OperationsListResponse
// A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
type OperationsListResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
