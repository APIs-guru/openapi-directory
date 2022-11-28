package shared

// CreateWatchRequestInput
// Create a new watch.
type CreateWatchRequestInput struct {
	Watch   *WatchInput `json:"watch,omitempty"`
	WatchID *string     `json:"watchId,omitempty"`
}
