package shared

// ListWatchesResponse
// The response of a ListWatchesRequest.
type ListWatchesResponse struct {
	Watches []Watch `json:"watches,omitempty"`
}
