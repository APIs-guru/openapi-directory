package shared

// ListProjectsResponse
// A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. NOTE: A response may contain fewer elements than the request `page_size` and still have a `next_page_token`.
type ListProjectsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Projects      []Project `json:"projects,omitempty"`
}
