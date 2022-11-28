package shared

// ListWaitersResponse
// Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
type ListWaitersResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Waiters       []Waiter `json:"waiters,omitempty"`
}
