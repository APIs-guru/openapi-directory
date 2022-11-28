package shared

// WatchVariableRequest
// Request for the `WatchVariable()` method.
type WatchVariableRequest struct {
	NewerThan *string `json:"newerThan,omitempty"`
}
