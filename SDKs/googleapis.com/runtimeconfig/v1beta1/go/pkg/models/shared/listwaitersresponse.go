package shared

type ListWaitersResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Waiters       []Waiter `json:"waiters,omitempty"`
}
