package shared

type ListWaitersResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Waiters       []Waiter `json:"waiters"`
}
