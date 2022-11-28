package shared

// ListQueuedResourcesResponse
// Response for ListQueuedResources.
type ListQueuedResourcesResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	QueuedResources []QueuedResource `json:"queuedResources,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
