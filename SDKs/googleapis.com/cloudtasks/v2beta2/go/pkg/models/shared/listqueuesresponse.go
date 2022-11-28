package shared

// ListQueuesResponse
// Response message for ListQueues.
type ListQueuesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Queues        []Queue1 `json:"queues,omitempty"`
}
